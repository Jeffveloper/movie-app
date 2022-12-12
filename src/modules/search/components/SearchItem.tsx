import { movieSearch } from "@interfaces/movie.interface";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

const SearchItem = ({ movie }: SearchItemProps) => {
  return (
    <li
      key={movie.id}
      className="bg-slate-800 hover:shadow-2xl hover:bg-slate-700 duration-200 animate-pulse rounded-lg"
    >
      <Link href={`/movie/${movie.id}`} legacyBehavior>
        <a className="flex">
          <Image
            className="rounded w-auto h-auto"
            src={movie.poster}
            alt={movie.name}
            width={100}
            height={150}
            priority
          />
          <div className="py-2 pl-4 pr-2 flex flex-col">
            <h3 className="font-semibold">{movie.name}</h3>
            <Rating
              initialValue={movie.rating / 2}
              size={15}
              readonly
              allowFraction
            />
            <p className="pt-4 text-gray-300 text-xs line-clamp-5">
              {movie.description}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
};

type SearchItemProps = {
  movie: movieSearch;
};
export default SearchItem;
