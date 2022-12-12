import MovieCastItem from "@components/atoms/MovieCastItem";
import { MovieContext } from "@contexts/MovieContext";
import { movieCredit } from "@interfaces/movie.interface";
import { useContext } from "react";

const MovieCast = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <section className="px-8 py-6 ">
      <h2 className="text-lg mb-4 font-semibold">Cast</h2>
      <ul className="flex gap-3 overflow-auto scrollbar snap-x pb-2">
        {movieData.credits.map((cast: movieCredit, castId: number) => (
          <MovieCastItem cast={cast} key={castId} itemKey={cast.id} />
        ))}
      </ul>
    </section>
  );
};

type MovieCastProps = {
  cast: movieCredit;
  itemKey: number;
};

export default MovieCast;
