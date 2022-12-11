import MovieCastItem from "@components/atoms/MovieCastItem";
import { MovieContext } from "@contexts/MovieContext";
import { movieCredit } from "@interfaces/movie.interface";
import { useContext } from "react";

const MovieCast = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <section className="px-8 py-6 ">
      <h2 className="text-lg mb-4 font-semibold">Cast</h2>
      <ul className="flex gap-3 overflow-auto scrollbar snap-x ">
        {movieData.credits.map((cast: movieCredit) => (
          <MovieCastItem cast={cast} key={cast.id} />
        ))}
      </ul>
    </section>
  );
};

export default MovieCast;
