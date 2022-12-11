const MoviePageView = ({ id }: MoviePageProps) => {
  return (
    <>
      <h1>movie {id}</h1>
    </>
  );
};

type MoviePageProps = {
  id: number;
};

export default MoviePageView;
