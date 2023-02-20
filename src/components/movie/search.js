import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { getMovies } from '@/lib/movieService'
import Spinner from '@/components/icons/spinner'

export default function Search({ setMovies }) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const debounceQuery = useDebounce(query, 500)

  useEffect(() => {
    setLoading(true)
    getMovies(debounceQuery)
      .then(({ data }) => {
        setMovies(data.movies)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery])

  return (
    <div className="my-4 w-full flex items-center justify-center">
      <input
        placeholder="Search"
        className="p-4 rounded w-full lg:w-1/2"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="relative right-[2.5rem] pr-4">
        {loading && <Spinner className="w-6 h-6 ml-4 animate-spin" />}
      </span>
    </div>
  )
}
