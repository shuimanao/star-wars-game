import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import { choosePlayers } from '../utils/choosePlayers';
import { renderChosenPlayers } from '../utils/renderChosenPlayers';
import { renderWinner } from '../utils/renderWinner';
import { PlayerProps, SwapiResult } from '../types';

export const PlayStarships: FC<PlayerProps> = ({ data, setGameState }) => {
  const [chosenPlayers, setChosenPlayers] = useState<SwapiResult>([]);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const resource = 'starships';

  const handlePlayButton = () => {
    const chosen = choosePlayers(data);
    setChosenPlayers(chosen);
    setNumberOfGames(numberOfGames + 1);
  };

  const handleResetGameButton = () => setGameState({ status: 'initial' });

  return (
    <>
      <h4 data-testid="starships-chosen">You've chosen Starships to play</h4>
      {renderChosenPlayers(chosenPlayers, resource)}
      {renderWinner(chosenPlayers, resource)}
      {numberOfGames === 0 && <p>Click the button to choose two cards:</p>}
      <Button
        onClick={handlePlayButton}
        data-testid="play-btn-starship"
        variant="contained"
      >
        {numberOfGames > 0 ? <>Play again</> : <>Play</>}
      </Button>
      <Button onClick={handleResetGameButton} variant="outlined">
        Reset game
      </Button>
    </>
  );
};
