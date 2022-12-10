const MovieButton = ({ children, primary }: MovieButtonProps): JSX.Element => {
  return <button className="p-2 bg-grey">{children}</button>;
};

type MovieButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
};

export default MovieButton;
