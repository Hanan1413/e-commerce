import React from 'react'
import ProductGrid from './ProductGrid'
import { useLoaderData } from 'react-router-dom'

const ProductsContainer = ({collectionNames}) => {
  return (
    <div>
     <ProductGrid  collectionName='Dresses' />
     <ProductGrid  collectionName='Hats' />
     <ProductGrid  collectionName='Jeans' />
     <ProductGrid  collectionName='sweaters' />

     

 
    </div>
  )
}

export default ProductsContainer
