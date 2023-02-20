import PersonList from '@/components/people/list'
import Genres from '@/components/genre/list'
export default function Single({ movie }) {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-10">
        {movie.name} ({movie.year})
      </h1>
      <div className="p-4 bg-white rounded w-full h-full">
        <p>{movie.synopsis}</p>
        <h2 className="text-3xl font-bold my-4">Rating</h2>
        <p className="font-bold">{movie.rating || 'unrated'}/5</p>
        <h2 className="text-3xl font-bold my-4">Age limit</h2>
        <p className="font-bold">{movie.ageLimit || 'For everyone'}</p>

        <h2 className="text-3xl font-bold my-4">Genres</h2>
        <Genres genres={movie.genres} />
        <h2 className="text-3xl font-bold my-4">Director</h2>
        {movie.director ? (
          <PersonList people={[movie.director]} />
        ) : (
          <p className="font-bold">N/A</p>
        )}
        <h2 className="text-3xl font-bold my-4">Actors</h2>
        <PersonList people={movie.actors} />
      </div>
    </div>
  )
}
