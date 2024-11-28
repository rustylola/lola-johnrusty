import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams();
  return <h2>Product ID: {id} </h2>
}

export default ProductDetails
