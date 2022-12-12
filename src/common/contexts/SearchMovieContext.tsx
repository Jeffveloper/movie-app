import { movieSearch } from "@interfaces/movie.interface";
import { createContext, ReactNode, useState } from "react";

export const SearchContext = createContext({} as searchProps);

export const SearchProvider = ({ children }: PropsProvider) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movieList, setMovieList] = useState<movieSearch[]>(
    [] as movieSearch[]
  );
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        loading,
        setLoading,
        movieList,
        setMovieList,
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

type searchProps = {
  loading: boolean;
  setLoading: Function;
  movieList: movieSearch[];
  setMovieList: Function;
  search: string;
  setSearch: Function;
};

export interface PropsProvider {
  children: ReactNode;
}
