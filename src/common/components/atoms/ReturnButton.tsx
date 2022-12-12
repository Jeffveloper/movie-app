import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const ReturnButton = () => {
  return (
    <Link href="/">
      <button className="absolute top-2 left-2 shadow-2xl shadow-black">
        <BsArrowLeftCircleFill size={30} />
      </button>
    </Link>
  );
};

export default ReturnButton;
