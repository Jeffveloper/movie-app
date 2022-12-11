import { MovieItem } from "@interfaces/movie.interface";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_MOVIES_API;
const token = process.env.NEXT_PUBLIC_MOVIES_API_TOKEN;

const useGetMovie = async (id: number): Promise<MovieItem> => {
  const [movieData, setMovieData] = useState<MovieItem>({} as MovieItem);

  const getMovie = async () => {
    const petition = await fetch(`${baseUrl}/titles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await petition.json();
    const aItem: MovieItem = {
      id: response.title.id,
      name: response.title.name,
      year: response.title.year,
      poster: response.title.poster,
      season_count: response.title.season_count,
      language: response.title.language,
      episode_count: response.title.episode_count,
      rating: response.title.rating,
      vote_count: response.title.vote_count,
      genres: response.title.genres,
      seasons: response.title.seasons,
      credits: response.title.credits,
    };
    setMovieData(aItem);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movieData!;
};

export default useGetMovie;
