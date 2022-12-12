import BannerButton from "@components/atoms/Bannerbutton";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";

const MovieBannerButtons = () => {
  return (
    <ul className="flex justify-evenly items-center mt-1">
      <li>
        <BannerButton icon={<AiOutlinePlus size={20} />} text="Add" />
      </li>
      <li>
        <BannerButton
          icon={<FaPlay fill="#000" size={12} />}
          text="Play"
          primary
        />
      </li>
      <li>
        <BannerButton icon={<AiOutlineInfoCircle size={20} />} text="Info" />
      </li>
    </ul>
  );
};

export default MovieBannerButtons;
