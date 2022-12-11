const MovieDescription = ({ title, text }: MovieDescriptionProps) => {
  return (
    <section className="px-8 py-6 -mt-8">
      <h2 className="text-lg mb-4 font-semibold">{title}</h2>
      <p className="text-sm leading-6 text-gray-300">{text}</p>
    </section>
  );
};

type MovieDescriptionProps = {
  title: string;
  text: string;
};

export default MovieDescription;
