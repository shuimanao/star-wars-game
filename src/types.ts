export type AppProps = {};

export type GameState =
  | { status: 'initial' }
  | { status: 'in_progress'; chosenResource: 'people' | 'starships' };

export type SwapiResult = Record<string, string>[];

export type SwapiResponse = {
  count: number;
  next: string;
  previous: string;
  results: SwapiResult;
};

export type PlayerProps = {
  data: SwapiResult;
  setGameState: (arg: GameState) => void;
};

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
  created: string;
  edited: string;
  url: string;
};

export type Starship = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string;
  starship_class: string;
  url: string;
};
