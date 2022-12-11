import { AiOutlineHome } from "react-icons/Ai";
import { FiPlayCircle } from "react-icons/Fi";
import { BiSearchAlt2 } from "react-icons/Bi";
import { FiUser } from "react-icons/Fi";

const HeaderMobile = () => {
  return (
    <header className="bottom-0 fixed xs:absolute z-10 w-full backdrop-blur-sm bg-black/70">
      <nav>
        <ul className="list-none py-4 px-8 flex gap-2 justify-between">
          <li>
            <AiOutlineHome size={24} />
          </li>
          <li>
            <FiPlayCircle size={24} />
          </li>
          <li>
            <BiSearchAlt2 size={24} />
          </li>
          <li>
            <FiUser size={24} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
