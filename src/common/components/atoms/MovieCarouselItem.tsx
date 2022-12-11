import { MoviesItem } from "@interfaces/movie.interface";
import Image from "next/image";
import Link from "next/link";

const MoviesCarouselItem = ({ movie }: CarouselItemProps) => {
  return (
    <li className="snap-center">
      <Link href={`/movie/${movie.id}`}>
        <Image src={movie.poster} alt={movie.name} width={100} height={150} />
      </Link>
    </li>
  );
};

type CarouselItemProps = {
  movie: MoviesItem;
};

export default MoviesCarouselItem;
