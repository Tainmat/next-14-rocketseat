export default async function Home() {
  const response = await fetch('https://api.github.com/users/Tainmat')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
