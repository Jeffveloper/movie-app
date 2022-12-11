import MoviesCarouselItem from "@components/atoms/MovieCarouselItem";
import CarouselSkeleton from "@components/molecules/MovieCarouselskeletons";
import toTitleCase from "@helpers/titleCase.helper";
import useGetMovies from "@hooks/useGetMoviesList";
import { MovieItem } from "@interfaces/movie.interface";
import classNames from "classnames";
import { useState } from "react";

const MoviesCarousel = ({ genre, alternative }: carouselProps): JSX.Element => {
  const [movieData, setMovieData] = useState<MovieItem[]>([]);
  const data: Promise<void | MovieItem[]> = useGetMovies(genre).then((data) =>
    setMovieData(data)
  );

  if (movieData.length === 0) return <CarouselSkeleton />;

  return (
    <section
      className={classNames({ "bg-gray-900": alternative }, "px-8 py-6")}
    >
      <h2 className="mb-4">{toTitleCase(genre)}</h2>
      <div className="overflow-auto snap-x scrollbar pb-1">
        <ul className="flex gap-2 w-max">
          {movieData.map((movie: MovieItem) => (
            <MoviesCarouselItem movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

type carouselProps = {
  genre: string;
  alternative?: boolean;
};

export default MoviesCarousel;
