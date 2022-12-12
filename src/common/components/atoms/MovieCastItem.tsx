import { movieCredit } from "@interfaces/movie.interface";
import Image from "next/image";
import { FaUserCircle } from "react-icons/Fa";

const MovieCastItem = ({ cast }: CastItemProps) => {
  return (
    <li className="flex flex-col gap-2 text-center snap-center">
      <div className="w-16 h-16 mx-5 border rounded-full shadow-xl overflow-hidden flex justify-center items-center">
        {cast.poster === null && <FaUserCircle size={80} />}
        {cast.poster !== null && (
          <Image
            className="w-auto h-auto"
            src={cast.poster}
            alt={cast.name}
            width={300}
            height={450}
            priority
          />
        )}
      </div>
      <p className="text-xs text-gray-300 flex flex-col gap-1">
        <span className="font-semibold text-gray-100">{cast.name}</span>
        {cast.pivot.job && cast.pivot.job !== "cast" && (
          <span>{cast.pivot.job}</span>
        )}
        {cast.pivot.job && cast.pivot.job === "cast" && (
          <span> as {cast.pivot.character}</span>
        )}
      </p>
    </li>
  );
};

type CastItemProps = {
  cast: movieCredit;
};

export default MovieCastItem;
