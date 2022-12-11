import { MovieProvider } from "@contexts/MovieContext";
import MoviePageView from "@modules/movie/MoviePageView";

const SingleMovie = () => {
  return (
    <MovieProvider>
      <MoviePageView />
    </MovieProvider>
  );
};

export default SingleMovie;
