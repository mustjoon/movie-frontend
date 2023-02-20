import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../page.module.css";

import { getGenres } from "@/lib/genreService";
import { getActors } from "@/lib/actorSetvice";
import { getDirectors } from "@/lib/directorService";

import View from "@/components/movie/create-form";

export default async function Home({ params: { id } }) {
  const {
    data: { genres },
  } = await getGenres();

  const {
    data: { actors },
  } = await getActors();

  const {
    data: { directors },
  } = await getDirectors();

  return (
    <main className={styles.main}>
      <View actors={actors} genres={genres} directors={directors} />
    </main>
  );
}
