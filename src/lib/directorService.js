const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export async function getDirectors() {
  const response = await fetch(`${API_URI}directors`);
  const data = await response.json();
  return data;
}
