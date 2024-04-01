export async function LongWaitComponent() {
  // eslint-disable-next-line prettier/prettier
  await new Promise(resolve => setTimeout(resolve, 5000))

  return <p>Long wait is over!</p>
}
