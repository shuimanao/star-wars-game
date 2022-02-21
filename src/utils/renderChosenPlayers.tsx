import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { SwapiResult } from '../types';

export const renderChosenPlayers = (
  chosenItems: SwapiResult,
  resource: string
) => (
  <Grid container spacing={2}>
    {chosenItems &&
      chosenItems.map((item) => (
        <Grid item xs={6} key={item.name}>
          <Card>
            <CardContent>
              <strong>{item.name}</strong>
              {resource === 'people' ? (
                <p data-testid="people-card">Mass: {item.mass}</p>
              ) : (
                <p data-testid="starship-card">Crew: {item.crew}</p>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
  </Grid>
);
