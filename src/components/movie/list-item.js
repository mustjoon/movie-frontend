export default function SingleMovie({ movie }) {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">
        {movie.name} ({movie.year})
      </h3>
      <p>{movie.synopsis}</p>
    </div>
  )
}
