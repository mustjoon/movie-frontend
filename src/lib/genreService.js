const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI

export async function getGenres() {
  const response = await fetch(`${API_URI}genres`)
  const data = await response.json()
  return data
}
