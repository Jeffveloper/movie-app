import { MovieContext } from "@contexts/MovieContext";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const BannerButton = ({ text, icon, primary }: BannerButtonProps) => {
  const router = useRouter();
  const { movieData } = useContext(MovieContext);

  return (
    <Link
      href={
        router.pathname === "/" ? "/movie/565431" : `/movie/${movieData.id}`
      }
    >
      <button
        className={classNames(
          { "bg-white text-black px-5 rounded": primary },
          { "flex-col": !primary },
          "flex items-center gap-2 py-2"
        )}
      >
        {icon}
        <p className="text-sm">{text}</p>
      </button>
    </Link>
  );
};

type BannerButtonProps = {
  text: string;
  icon: React.ReactNode;
  primary?: boolean;
};

export default BannerButton;
