import { AiOutlineHome } from "react-icons/Ai";
import { FaRandom } from "react-icons/Fa";
import { BiSearchAlt2 } from "react-icons/Bi";
import { FiUser } from "react-icons/Fi";
import Link from "next/link";

const HeaderMobile = () => {
  const randomId = Math.floor(Math.random() * 1000);

  return (
    <header className="bottom-0 fixed xs:absolute z-10 w-full backdrop-blur-sm bg-black/70">
      <nav>
        <ul className="list-none py-2 px-8 flex gap-2 justify-between">
          <li>
            <Link href="/" legacyBehavior>
              <a className="flex px-3 py-2">
                <AiOutlineHome size={24} />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/movie/${randomId}`} legacyBehavior>
              <a className="flex px-3 py-2">
                <FaRandom size={20} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/search" legacyBehavior>
              <a className="flex px-3 py-2">
                <BiSearchAlt2 size={24} />
              </a>
            </Link>
          </li>
          <li>
            <a className="flex px-3 py-2">
              <FiUser size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
