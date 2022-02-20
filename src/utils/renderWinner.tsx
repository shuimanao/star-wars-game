import React from 'react';
import { SwapiResult } from '../types';

const chooseBiggerAttribute = (chosenItems: SwapiResult, resource: string) => {
  const attributeArray = [];

  for (const item of chosenItems) {
    resource === 'people' && attributeArray.push(parseInt(item.mass));
    resource === 'starships' &&
      attributeArray.push(parseInt(item.crew.replace(/[\,\-]/g, '')));
  }

  let winnerIndex = attributeArray.indexOf(Math.max(...attributeArray));

  if (Math.max(...attributeArray) === Math.min(...attributeArray)) {
    winnerIndex = -1;
  }
  return winnerIndex;
};

export const renderWinner = (chosenItems: SwapiResult, resource: string) => {
  const winnerIndex = chooseBiggerAttribute(chosenItems, resource);
  return (
    <>
      {winnerIndex == -1 ? (
        <p>There is no winner</p>
      ) : (
        <h2>And the winner is... {chosenItems[winnerIndex]?.name}</h2>
      )}
    </>
  );
};
