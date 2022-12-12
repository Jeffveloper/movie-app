import { SearchProvider } from "@contexts/SearchMovieContext";
import SearchView from "@modules/search/SearchView";

const searchPage = () => {
  return (
    <SearchProvider>
      <SearchView />
    </SearchProvider>
  );
};

export default searchPage;
