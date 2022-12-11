import GetCurrentId from "@helpers/GetCurrentId";
import useGetMovie from "@hooks/useGetMovie";
import { MovieItem } from "@interfaces/movie.interface";
import MoviePageView from "@modules/movie/MoviePageView";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const id: number = GetCurrentId();
  const [movieData, setMovieData] = useState<MovieItem>({} as MovieItem);

  const data: Promise<void | MovieItem> = useGetMovie(id).then((data) => {
    setMovieData(data);
  });

  if (Object.keys(movieData).length === 0) return <p>Getting Data ...</p>;

  return <MoviePageView id={id} />;
};

export default SingleMovie;
