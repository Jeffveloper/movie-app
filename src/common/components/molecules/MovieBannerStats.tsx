import { MovieItem } from "@interfaces/movie.interface";
import { Rating } from "react-simple-star-rating";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const MovieBannerStats = ({ movieData }: BannerStatsProps) => {
  return (
    <ul className="flex items-center justify-evenly text-sm font-semibold mt-3 mb-16">
      <li>
        <Rating
          initialValue={movieData.rating / 2}
          showTooltip
          size={20}
          readonly
          allowFraction
        />
      </li>
      <li className="flex gap-1 p-2 items-center bg-zinc-800 rounded">
        <FaHeart fill="pink" />
        <p>{movieData.vote_count}</p>
      </li>
      <li className="flex gap-1 p-2 items-center bg-zinc-800 rounded">
        <p>{movieData.year}</p>
        <AiTwotoneCalendar />
      </li>
    </ul>
  );
};

type BannerStatsProps = {
  movieData: MovieItem;
};

export default MovieBannerStats;
