import React from 'react'
import Header from './components/Header/Header'
import data from './data/products.json'
import ProductCard from './components/Product/ProductCard'

const App = () => {
  return (
    <div>
      <Header />
      <div className="product-grid">
        {data?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
