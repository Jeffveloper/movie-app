import { MovieContext } from "@contexts/MovieContext";
import { useContext } from "react";

const MovieGenres = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <section className="px-8 py-6 ">
      <h2 className="text-lg mb-4 font-semibold">Genres</h2>
      <ul className="flex gap-3 flex-wrap">
        {movieData.genres.map((genre) => (
          <li key={genre.id} className="flex items-center flex-wrap">
            <p className="text-sm leading-6 bg-gray-900 text-gray-200 inline-block py-2 px-4 rounded-md w-max">
              {genre.display_name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieGenres;
