import BannerMovieSkeleton from "@components/molecules/BannerMovieSkeleton";
import MovieBannerButtons from "@components/molecules/MovieBannerButtons";
import MovieBannerStats from "@components/molecules/MovieBannerStats";
import useGetMovie from "@hooks/useGetMovie";
import { MovieItem } from "@interfaces/movie.interface";
import Image from "next/image";
import { useState } from "react";

const MovieBanner = ({ movieId }: MovieBannerProps) => {
  const [movieData, setMovieData] = useState<MovieItem>({} as MovieItem);
  const data: Promise<void | MovieItem> = useGetMovie(movieId).then((data) =>
    setMovieData(data)
  );
  if (Object.keys(movieData).length === 0) return <BannerMovieSkeleton />;

  return (
    <section>
      <div
        className="relative top-0 w-full h-full 
        before:content-[''] before:absolute before:bottom-0 before:w-full before:h-1/6 before:block before:bg-gradient-to-t before:from-body-bg"
      >
        <Image
          src={movieData.poster}
          alt={movieData.name}
          width={415}
          height={620}
        />
      </div>
      <MovieBannerButtons />
      <MovieBannerStats movieData={movieData} />
    </section>
  );
};

type MovieBannerProps = {
  movieId: number;
};

export default MovieBanner;
