import React, { FC, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { getPeople, getStarships } from './api/fetchData';
import { PlayPeople } from './components/PlayPeople';
import { PlayStarships } from './components/PlayStarships';
import { AppProps, GameState, SwapiResult } from './types';

export const App: FC<AppProps> = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<SwapiResult>([]);
  const [starships, setStarships] = useState<SwapiResult>([]);
  const [gameState, setGameState] = useState<GameState>({ status: 'initial' });

  const handlePeopleButtonClick = async () => {
    setLoading(true);
    const people = await getPeople();
    people && setPeople(people.results);
    setLoading(false);
    setGameState({ status: 'in_progress', chosenResource: 'people' });
  };
  const handleStarshipsButtonClick = async () => {
    setLoading(true);
    const starships = await getStarships();
    starships && setStarships(starships.results);
    setLoading(false);
    setGameState({ status: 'in_progress', chosenResource: 'starships' });
  };

  return (
    <Stack justifyContent="center" alignItems="center" spacing="20px">
      {gameState.status === 'initial' && (
        <Stack justifyContent="center" alignItems="center" spacing="20px">
          <p>Choose resource to play:</p>
          <Button
            variant="contained"
            onClick={handlePeopleButtonClick}
            data-testid="choose-people-btn"
          >
            People
          </Button>
          <Button
            variant="contained"
            onClick={handleStarshipsButtonClick}
            data-testid="choose-starships-btn"
          >
            Starships
          </Button>
        </Stack>
      )}
      {loading && <div>Loading data...</div>}
      {gameState.status === 'in_progress' && (
        <>
          {gameState.chosenResource === 'people' && (
            <PlayPeople data={people} setGameState={setGameState} />
          )}
          {gameState.chosenResource === 'starships' && (
            <PlayStarships data={starships} setGameState={setGameState} />
          )}
        </>
      )}
    </Stack>
  );
};
