import Movie from './list-item'
import Link from 'next/link'

export default function MovieList({ movies, count }) {
  if (movies.length === 0) {
    return (
      <div className="w-full text-center">
        <h2 className="text-4xl">No results!</h2>
      </div>
    )
  }
  return (
    <ul className="grid lg:grid-cols-4 gap-4 auto-rows-max">
      {movies.map((movie) => (
        <li
          className="w-full h-full bg-white rounded cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-150"
          key={movie.id}
        >
          <Link href={`movies/${movie.id}`}>
            <Movie movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
