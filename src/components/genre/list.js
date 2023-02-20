export default function List({ genres }) {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {genres.map((genre) => (
        <li key={genre.id}>
          <div className="text-xl font-bold mb-4 bg-black text-white p-2 rounded">
            {genre.name}
          </div>
        </li>
      ))}
    </ul>
  )
}
