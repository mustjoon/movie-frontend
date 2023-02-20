"use client";

import { useState } from "react";

import MovieList from "./list";
import Search from "./search";

export default function MovieView({ movies: initialMovies, count }) {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold mb-10">Movies</h1>
      <Search setMovies={setMovies} />
      <MovieList movies={movies} count={count} />
    </div>
  );
}
