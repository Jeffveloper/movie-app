import classNames from "classnames";
import Image from "next/image";

const UserSection = (): JSX.Element => {
  return (
    <div className="flex justify-between mb-9">
      <div className="">
        <h2 className="text-2xl leading-9">
          Hi <span className="font-extrabold">Markus</span>
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          Check for latest addition.
        </p>
      </div>
      <Image
        className="rounded-full"
        src="/images/user-profile-photo.jpg"
        alt="profile photo"
        width="53"
        height="53"
      />
    </div>
  );
};

export default UserSection;
