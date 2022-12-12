import { SearchContext } from "@contexts/SearchMovieContext";
import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/Bi";

const SearchButtonSection = () => {
  const { setSearch } = useContext(SearchContext);

  return (
    <section className="px-8 py-6">
      <div className="flex gap-2 items-center border-2 py-1 px-3 border-gray-700 bg-black/30 rounded-3xl">
        <input
          type="text"
          placeholder="Search here ..."
          className="w-full p-2 bg-transparent outline-none placeholder:text-gray-700"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearchAlt2 size={24} />
      </div>
    </section>
  );
};

export default SearchButtonSection;
