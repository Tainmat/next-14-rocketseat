'use client'

import { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  function handleAddButton() {
    // eslint-disable-next-line prettier/prettier
    setCount(state => state + 1)
  }

  return <button onClick={handleAddButton}>Add to Cart ({count})</button>
}
