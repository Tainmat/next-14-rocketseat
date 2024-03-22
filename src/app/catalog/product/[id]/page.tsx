interface Props {
  params: {
    id: string
  }
}

export default function Product({ params }: Props) {
  const { id } = params

  return <h1>Product: {id}</h1>
}
