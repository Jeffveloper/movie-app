import { SearchContext } from "@contexts/SearchMovieContext";
import useGetSearch from "@hooks/useGetMoviesSearch";
import { movieSearch } from "@interfaces/movie.interface";
import SearchItem from "@modules/search/components/SearchItem";
import SearchResultsSkeleton from "@modules/search/components/searchResultsSkeleton";
import classNames from "classnames";
import { useContext } from "react";
import { TbFaceIdError } from "react-icons/tb";

const SearchResultsSection = () => {
  const { search, movieList, loading } = useContext(SearchContext);
  useGetSearch();

  if (loading) {
    return <SearchResultsSkeleton />;
  }

  const filteredMovies = movieList.filter((movie: movieSearch) => {
    if (search === "") return movie;
    if (movie.name.toLowerCase().includes(search.toLowerCase())) return movie;
  });

  console.log(filteredMovies);
  return (
    <section
      className={classNames(
        { "h-full": filteredMovies.length === 0 },
        "px-8 py-6 bg-gray-900"
      )}
    >
      {search !== "" && (
        <h1 className="text-sm mb-4">
          Search results for: <b>&quot;{search}&quot;</b>
        </h1>
      )}
      <ul className="flex flex-col gap-4 justify-center items-start ">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie: movieSearch, movieKey: number) => (
            <SearchItem movie={movie} key={movieKey} />
          ))
        ) : (
          <div className={classNames("pt-56 mx-auto")}>
            <TbFaceIdError size={50} />
          </div>
        )}
      </ul>
    </section>
  );
};

export default SearchResultsSection;
