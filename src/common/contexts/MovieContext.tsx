import { MovieItem } from "@interfaces/movie.interface";
import { createContext, FC, ReactNode, useState } from "react";

const defaultState = {};

export const MovieContext = createContext({} as MovieProps);

export const MovieProvider = ({ children }: PropsProvider) => {
  const [movieData, setMovieData] = useState<MovieItem>({} as MovieItem);

  return (
    <MovieContext.Provider
      value={{
        movieData,
        setMovieData,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

type MovieProps = {
  movieData: MovieItem;
  setMovieData: Function;
};

export interface PropsProvider {
  children: ReactNode;
}
