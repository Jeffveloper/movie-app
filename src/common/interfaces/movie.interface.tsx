export interface MoviesItem {
  id: number;
  name: string;
  poster: string;
}

export interface MovieItem {
  id: number;
  name: string;
  year: number;
  poster: string;
  season_count: number;
  language: string;
  episode_count: number;
  rating: number;
  vote_count: number;
  genres: {
    id: number;
    display_name: string;
  };
  seasons: {
    id: number;
    number: number;
    episode_count: number;
  };
  credits: {
    id: number;
    name: string;
    poster: string;
    pivot: {
      job: string;
      department: string;
      character: string;
    };
  };
}
