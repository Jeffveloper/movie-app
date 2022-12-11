import classNames from "classnames";
import Link from "next/link";
import { exitCode } from "process";
import { displayPartsToString } from "typescript";

const BannerButton = ({ text, icon, primary }: BannerButtonProps) => {
  return (
    <Link href="/movie/1">
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
