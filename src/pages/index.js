import Layout from "@/components/Layout";
import Main from "@/components/Main";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <Layout title="MOVIEfinder">
      <Main movies={movies} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1"
  );
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
}
