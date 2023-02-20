import { API_URI } from './constants'

export async function getActors() {
  const response = await fetch(`${API_URI}actors`)
  const data = await response.json()
  return data
}
