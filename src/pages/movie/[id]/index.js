import Image from "next/image";
import Layout from "@/components/Layout";

const Movie = ({ movie }) => {
  return (
    <Layout title={movie.title}>
      <div className="container max-w-4xl mx-auto pt-28">
        <div className="px-3">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            width={1000}
            height={600}
            className="rounded-md"
            alt={movie.title}
          />
          <h1 className="font-bold text-xl my-2">{movie.title}</h1>
          <p className="text-slate-300 text-sm mt-4">{movie.overview}</p>
          <p className="mt-5 text-slate-300 text-sm">
            Genres:{" "}
            <span className="font-bold">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </p>
          <p className="text-slate-300 text-sm">
            Release Date:{" "}
            <span className="font-bold">{movie.release_date}</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1`
  );
  const data = await res.json();
  const movie = data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1"
  );
  const data = await res.json();
  const movies = data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
