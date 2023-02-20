import { API_URI } from './constants'

export async function getDirectors() {
  const response = await fetch(`${API_URI}directors`)
  const data = await response.json()
  return data
}
