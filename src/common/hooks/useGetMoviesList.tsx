import { MovieItem } from "@interfaces/movie.interface";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_MOVIES_API;
const token = process.env.NEXT_PUBLIC_MOVIES_API_TOKEN;

const useGetMovies = async (genreUrl: string): Promise<MovieItem[]> => {
  const [movieList, setMovieList] = useState<MovieItem[]>([]);

  const getMoviesList = async () => {
    const petition = await fetch(`${baseUrl}/titles?genre=${genreUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await petition.json();
    const aItems = response.pagination.data.map((item: Item) => {
      const obj: MovieItem = {
        id: item.id,
        name: item.name,
        poster: item.poster,
      };
      return obj;
    });
    setMovieList(aItems);
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  return movieList;
};

interface Item {
  id: number;
  name: string;
  poster: string;
}

export default useGetMovies;
