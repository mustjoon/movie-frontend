import { API_URI } from './constants'

export async function getGenres() {
  const response = await fetch(`${API_URI}genres`)
  const data = await response.json()
  return data
}
