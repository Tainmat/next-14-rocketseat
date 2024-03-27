import { AddToCartButton } from './add-to-cart-button'

interface Props {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: Props) {
  // eslint-disable-next-line prettier/prettier
  await new Promise(resolve => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/Tainmat')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Size: {size}</h1>
      <h1>Color: {color}</h1>

      <AddToCartButton />
    </div>
  )
}
