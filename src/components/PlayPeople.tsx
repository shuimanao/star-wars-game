import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import { choosePlayers } from '../utils/choosePlayers';
import { renderChosenPlayers } from '../utils/renderChosenPlayers';
import { renderWinner } from '../utils/renderWinner';
import { PlayerProps, SwapiResult } from '../types';

export const PlayPeople: FC<PlayerProps> = ({ data, setGameState }) => {
  const [chosenPlayers, setChosenPlayers] = useState<SwapiResult>([]);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const resource = 'people';

  const handlePlayButton = () => {
    const chosen = choosePlayers(data);
    setChosenPlayers(chosen);
    setNumberOfGames(numberOfGames + 1);
  };

  const handleResetGameButton = () => setGameState({ status: 'initial' });

  return (
    <>
      <h4 data-testid="h2eople-chosen">You've chosen People to play</h4>
      {renderChosenPlayers(chosenPlayers, resource)}
      {renderWinner(chosenPlayers, resource)}
      {numberOfGames === 0 && <p>Click the button to choose two cards:</p>}
      <Button
        onClick={handlePlayButton}
        data-testid="play-btn-people"
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
