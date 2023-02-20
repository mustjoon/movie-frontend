import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../page.module.css";

import { getMovie } from "@/lib/movieService";

import Single from "@/components/movie/single";

export default async function Home({ params: { id } }) {
  const [data, error] = await getMovie(id);

  if (error && error.status === 404) {
    return (
      <main className={styles.main}>
        <h1 className="text-2xl font-bold mb-4">Not found</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Single movie={data} />
    </main>
  );
}
