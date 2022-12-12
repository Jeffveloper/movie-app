import { AiOutlinePlus } from "react-icons/Ai";
import { AiOutlineInfoCircle } from "react-icons/Ai";

const BannerMovieSkeleton = () => {
  return (
    <div>
      <div
        className="relative top-0 w-full h-full 
        before:content-[''] before:absolute before:bottom-0 before:w-full before:h-1/6 before:block before:bg-gradient-to-t before:from-body-bg"
      >
        <div className="h-[552px] w-full bg-gray-600 duration-200 animate-pulse"></div>
      </div>
      <ul className="flex justify-evenly items-center mt-1">
        <li className="flex items-center gap-2 py-2 flex-col">
          <AiOutlinePlus size={20} />
          <div className="h-5 w-7 bg-gray-600 duration-200 animate-pulse rounded"></div>
        </li>
        <li className="flex items-center gap-2 w-[88px] h-9 bg-gray-600 duration-200 animate-pulse rounded"></li>
        <li className="flex items-center gap-2 py-2 flex-col">
          <AiOutlineInfoCircle size={20} />
          <div className="h-5 w-7 bg-gray-600 duration-200 animate-pulse rounded"></div>
        </li>
      </ul>

      <ul className="flex items-center justify-evenly text-sm font-semibold mt-3 mb-16">
        <li className="h-[30px] w-[171px] bg-gray-600 duration-200 animate-pulse rounded"></li>
        <li className="h-8 w-[60px] bg-gray-600 duration-200 animate-pulse rounded"></li>
        <li className="h-8 w-[67px] bg-gray-600 duration-200 animate-pulse rounded"></li>
      </ul>
    </div>
  );
};

export default BannerMovieSkeleton;
