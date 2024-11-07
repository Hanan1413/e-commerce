import React from 'react'
import ProductGrid from './ProductGrid';
import SectionTitle from './SectionTitle'

const FeaturedProducts = () => {
  return (
    <div>
        <SectionTitle text="featured products" />
        <ProductGrid collectionName='Dresses' />

      
    </div>
  )
}

export default FeaturedProducts
