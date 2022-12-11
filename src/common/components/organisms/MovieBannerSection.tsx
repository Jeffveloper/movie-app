import useGetMovie from "@hooks/useGetMovie";
import { MovieItem } from "@interfaces/movie.interface";
import { useState } from "react";

const MovieBanner = ({ movieId }: MovieBannerProps) => {
  const [movieData, setMovieData] = useState<MovieItem[]>([]);
  const data: Promise<void | MovieItem[]> = useGetMovie(movieId).then((data) =>
    setMovieData(data)
  );

  console.log(movieData);

  return (
    <>
      <div className="movie-banner">Banner</div>
    </>
  );
};

type MovieBannerProps = {
  movieId: number;
};

export default MovieBanner;
