const SearchResultsSkeleton = (): JSX.Element => {
  return (
    <section className="px-8 py-6 bg-gray-900">
      <ul className="flex flex-col gap-4 ">
        <li className="bg-gray-700  duration-200 animate-pulse rounded-lg">
          <div className="w-[128px] h-[192px] bg-gray-600 rounded-lg "></div>
        </li>
        <li className="bg-gray-700  duration-200 animate-pulse rounded-lg">
          <div className="w-[128px] h-[192px] bg-gray-600 rounded-lg "></div>
        </li>
        <li className="bg-gray-700  duration-200 animate-pulse rounded-lg">
          <div className="w-[128px] h-[192px] bg-gray-600 rounded-lg "></div>
        </li>
        <li className="bg-gray-700  duration-200 animate-pulse rounded-lg">
          <div className="w-[128px] h-[192px] bg-gray-600 rounded-lg "></div>
        </li>
      </ul>
    </section>
  );
};

export default SearchResultsSkeleton;
