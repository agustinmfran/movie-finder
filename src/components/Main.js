import Card from "./Card";

const Main = ({ movies }) => {
  return (
    <section id="home" className="container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Whats Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default Main;
