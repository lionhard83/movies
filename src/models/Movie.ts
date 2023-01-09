export type Actor = {
  name: string;
  id: string;
};

export type Review = {
  rank: number;
  description: string;
  author: string;
};

export type Movie = {
  id: string;
  name: string;
  description: string;
  typology: string;
  categories: string[];
  languages: string[];
  subtitles: string[];
  duration: number;
  reviews: Review[];
  release: string;
  expiration: string;
  cast: {
    director: string;
    actors: Actor[];
  };
};
