export interface MovieItem {
  id: number;
  name: string;
  poster: string;
}

export interface MovieList {
  data: MovieItem[];
}
