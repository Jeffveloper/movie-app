import MoviesCarouselItem from "@components/atoms/MovieCarouselItem";
import CarouselSkeleton from "@components/molecules/MovieCarouselskeletons";
import toTitleCase from "@helpers/titleCase.helper";
import useGetMovies from "@hooks/useGetMoviesList";
import { MoviesItem } from "@interfaces/movie.interface";
import classNames from "classnames";
import { useState } from "react";

const MoviesCarousel = ({ genre, alternative }: carouselProps): JSX.Element => {
  const [moviesData, setMoviesData] = useState<MoviesItem[]>([]);
  const data: Promise<void | MoviesItem[]> = useGetMovies(genre).then((data) =>
    setMoviesData(data)
  );

  if (moviesData.length === 0) return <CarouselSkeleton />;

  return (
    <section
      className={classNames({ "bg-gray-900": alternative }, "px-8 py-6")}
    >
      <h2 className="mb-4">{toTitleCase(genre)}</h2>
      <div className="overflow-auto snap-x scrollbar pb-1">
        <ul className="flex gap-2 w-max">
          {moviesData.map((movie: MoviesItem) => (
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
