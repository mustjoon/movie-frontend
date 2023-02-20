import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../page.module.css";

import { getMovies } from "@/lib/movieService";

import MovieListView from "@/components/movie/list-view";

export default async function Home() {
  const { data } = await getMovies();
  const { count, movies } = data;

  return (
    <main className={styles.main}>
      <MovieListView count={count} movies={movies} />
    </main>
  );
}
