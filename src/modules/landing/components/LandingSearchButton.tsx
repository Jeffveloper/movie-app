import Link from "next/link";

const LandingSearchbutton = (): JSX.Element => {
  return (
    <div className="px-8">
      <Link href="/search">
        <div className="flex gap-2 items-center border-2 py-1 px-3 border-gray-700 bg-black/30 rounded-3xl mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <p className="w-full p-2 bg-transparent outline-none text-gray-700">
            Search for a movie
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LandingSearchbutton;
