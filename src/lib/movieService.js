import { API_URI } from './constants'

export async function getMovies(query) {
  const response = await fetch(`${API_URI}movies?q=${query || ''}`)
  const data = await response.json()
  return data
}

export async function getMovie(id) {
  try {
    const response = await fetch(`${API_URI}movies/${id}`)
    const status = response.status
    const { success, data, errors } = await response.json()

    if (success) {
      return [data, null]
    }

    return [null, { status, errors }]
  } catch (err) {
    return [null, { status: 500, errors: [] }]
  }
}

export async function createMovie(movie) {
  try {
    const response = await fetch(`${API_URI}movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })

    const status = response.status
    const { success, data, errors } = await response.json()

    if (success) {
      return [data, null]
    }

    return [null, { status, errors }]
  } catch (err) {
    return [null, { status: 500, errors: [] }]
  }
}
