export interface MoviesItem {
  id: number;
  name: string;
  poster: string;
}

export interface MovieItem {
  id: number;
  name: string;
  year: number;
  description: string;
  poster: string;
  season_count: number;
  language: string;
  episode_count: number;
  rating: number;
  vote_count: number;
  genres: movieGenre[];
  seasons: movieSeason[];
  credits: movieCredit[];
}

type movieGenre = {
  id: number;
  display_name: string;
};

type movieSeason = {
  id: number;
  number: number;
  episode_count: number;
};

export type movieCredit = {
  id: number;
  name: string;
  poster: string;
  pivot: creditPivot;
};

type creditPivot = {
  job: string;
  department?: string | undefined;
  character?: string | undefined;
};
