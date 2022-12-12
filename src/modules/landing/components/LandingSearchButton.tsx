import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";

const LandingSearchbutton = (): JSX.Element => {
  return (
    <div className="px-8">
      <Link href="/search">
        <div className="flex gap-2 items-center border-2 py-1 px-3 border-gray-700 bg-black/30 rounded-3xl mb-6">
          <BiSearchAlt2 size={24} />
          <p className="w-full p-2 bg-transparent outline-none text-gray-700">
            Search for a movie
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LandingSearchbutton;
