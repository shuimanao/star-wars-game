import { SwapiResult } from '../types';

// Fisher–Yates Shuffle algorithm
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    tempIndex: number,
    randomIndex: number;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    tempIndex = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempIndex;
  }

  return array;
};

export const choosePlayers = (array: SwapiResult) => {
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, 2);
};
