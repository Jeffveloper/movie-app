import { MovieItem } from "@interfaces/movie.interface";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_MOVIES_API;
const token = process.env.NEXT_PUBLIC_MOVIES_API_TOKEN;

const useGetMovie = async (id: number): Promise<MovieItem[]> => {
  const [movieData, setMovieData] = useState<MovieItem[]>([]);

  const getMovie = async () => {
    const petition = await fetch(`${baseUrl}/titles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await petition.json();
    const aItems = response.data.title.map((item: MovieItem) => {
      const obj: MovieItem = {
        id: item.id,
        name: item.name,
        year: item.year,
        poster: item.poster,
        season_count: item.season_count,
        language: item.language,
        episode_count: item.episode_count,
        rating: item.rating,
        vote_count: item.vote_count,
        genres: {
          id: item.genres.id,
          display_name: item.genres.display_name,
        },
        seasons: {
          id: item.seasons.id,
          number: item.seasons.number,
          episode_count: item.seasons.episode_count,
        },
        credits: {
          id: item.credits.id,
          name: item.credits.name,
          poster: item.credits.poster,
          pivot: {
            job: item.credits.pivot.job,
            department: item.credits.pivot.department,
            character: item.credits.pivot.character,
          },
        },
      };
      return obj;
    });
    setMovieData(aItems);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movieData;
};

export default useGetMovie;
