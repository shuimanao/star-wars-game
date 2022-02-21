import { SwapiResponse } from '../types';

const fetchDefault = async (
  url: RequestInfo,
  options?: RequestInit
): Promise<Response> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const getPeople = async (): Promise<SwapiResponse | undefined> => {
  try {
    const response = await fetchDefault('https://swapi.dev/api/people/');
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const getStarships = async (): Promise<SwapiResponse | undefined> => {
  try {
    const response = await fetchDefault('https://swapi.dev/api/starships/');
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
