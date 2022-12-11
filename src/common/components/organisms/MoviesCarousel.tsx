import MoviesCarouselItem from "@components/atoms/MovieCarouselItem";
import toTitleCase from "@helpers/titleCase.helper";
import useGetMovies from "@hooks/useGetMoviesList";
import { MovieItem } from "@interfaces/movie.interface";
import { useState } from "react";

const MoviesCarousel = ({ genre }: carouselProps): JSX.Element => {
  const [movieData, setMovieData] = useState<MovieItem[]>([]);
  const data: Promise<void | MovieItem[]> = useGetMovies(genre).then((data) =>
    setMovieData(data)
  );

  if (movieData.length === 0) return <h1>Loading ...</h1>;

  return (
    <section>
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
};

export default MoviesCarousel;
