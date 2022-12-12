import { MovieItem } from "@interfaces/movie.interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/Bs";

const baseUrl = process.env.NEXT_PUBLIC_MOVIES_API;
const token = process.env.NEXT_PUBLIC_MOVIES_API_TOKEN;

const useGetMovie = async (id: number): Promise<MovieItem> => {
  const route = useRouter();
  const idFromRoute = route.query.id;
  const [movieData, setMovieData] = useState<MovieItem>({} as MovieItem);

  useEffect(() => {
    const getMovie = async () => {
      const petition = await fetch(`${baseUrl}/titles/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!petition.ok) {
        return;
      }

      const response = await petition.json();
      const aItem: MovieItem = {
        id: response.title.id,
        name: response.title.name,
        year: response.title.year,
        description: response.title.description,
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

    getMovie();
  }, [idFromRoute, id]);

  return movieData!;
};

export default useGetMovie;
