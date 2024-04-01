export async function GithubProfile() {
  // eslint-disable-next-line prettier/prettier
  await new Promise(resolve => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/Tainmat')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
