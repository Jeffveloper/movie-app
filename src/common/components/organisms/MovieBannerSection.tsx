import BannerMovieSkeleton from "@components/molecules/BannerMovieSkeleton";
import MovieBannerButtons from "@components/molecules/MovieBannerButtons";
import MovieBannerStats from "@components/molecules/MovieBannerStats";
import { MovieContext } from "@contexts/MovieContext";
import Image from "next/image";
import { useContext } from "react";

const MovieBanner = () => {
  const { movieData } = useContext(MovieContext);
  if (Object.keys(movieData).length === 0) return <BannerMovieSkeleton />;

  return (
    <section>
      <div
        className="relative top-0 w-full h-full 
        before:content-[''] before:absolute before:bottom-0 before:w-full before:h-1/5 before:block before:bg-gradient-to-t before:from-body-bg"
      >
        <Image
          className="w-auto h-auto"
          src={movieData.poster}
          alt={movieData.name}
          width={415}
          height={620}
          priority
        />
      </div>
      <MovieBannerButtons />
      <MovieBannerStats movieData={movieData} />
    </section>
  );
};

export default MovieBanner;
