import ReturnButton from "@components/atoms/ReturnButton";
import MovieCast from "@components/molecules/MovieCast";
import MovieDescription from "@components/molecules/MovieDescription";
import MovieGenres from "@components/molecules/MovieGenres";
import MovieBanner from "@components/organisms/MovieBannerSection";
import MoviesCarousel from "@components/organisms/MoviesCarousel";
import { MovieContext } from "@contexts/MovieContext";
import GetCurrentId from "@helpers/GetCurrentId";
import useGetMovie from "@hooks/useGetMovie";
import { MovieItem } from "@interfaces/movie.interface";
import { useContext } from "react";

const MoviePageView = () => {
  const id: number = GetCurrentId();
  const { movieData, setMovieData } = useContext(MovieContext);

  useGetMovie(id).then((data) => {
    setMovieData(data);
  });

  if (Object.keys(movieData).length === 0) return <p>Getting Data ...</p>;

  return (
    <main className="relative">
      <MovieBanner />
      <MovieDescription title={movieData.name} text={movieData.description} />
      <MovieGenres />
      <MovieCast />
      <MoviesCarousel genre={movieData.genres[0].display_name} alternative />
      <ReturnButton />
    </main>
  );
};

type MoviePageProps = {
  id: number;
};

export default MoviePageView;
