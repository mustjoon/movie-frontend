const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export async function getActors() {
  const response = await fetch(`${API_URI}actors`);
  const data = await response.json();
  return data;
}
