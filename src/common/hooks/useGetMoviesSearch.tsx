import { SearchContext } from "@contexts/SearchMovieContext";
import { movieSearch } from "@interfaces/movie.interface";
import { useContext, useEffect } from "react";

const baseUrl = process.env.NEXT_PUBLIC_MOVIES_API;
const token = process.env.NEXT_PUBLIC_MOVIES_API_TOKEN;

const useGetSearch = async () => {
  const { search, setSearch, movieList, setMovieList, loading, setLoading } =
    useContext(SearchContext);

  useEffect(() => {
    const getMoviesSearch = async () => {
      setLoading(true);
      const petition = await fetch(`${baseUrl}/titles?perPage=100&page=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await petition.json();
      const aItems = response.pagination.data.map((item: movieSearch) => {
        const obj: movieSearch = {
          id: item.id,
          name: item.name,
          poster: item.poster,
          description: item.description,
          rating: item.rating,
        };
        return obj;
      });
      setMovieList(aItems);
      setLoading(false);
    };
    getMoviesSearch();
  }, [search]);
};

export default useGetSearch;
