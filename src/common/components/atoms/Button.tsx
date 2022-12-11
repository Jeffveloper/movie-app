import classNames from "classnames";

const MovieButton = ({ children, primary }: MovieButtonProps): JSX.Element => {
  return (
    <button
      className={classNames("border p-2 rounded bg-red-400", {
        "bg-green-200": primary,
      })}
    >
      {children}
    </button>
  );
};

type MovieButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
};

export default MovieButton;
