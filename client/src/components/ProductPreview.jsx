import React from 'react'
import '../styles/preview.css'
import AddProduct from './AddProduct'

const ProductPreview = ({ product,onAddProduct }) => {
  const addProduct=()=>{
      onAddProduct(product)
  }
  return (
    <div className='prev'>
      <center>
        <img src={product.imageUrl} alt={product.name} />
      <div className="cont">
      <h2 style={{fontSize: '1.5em'}}>{product.name}</h2>
      <p>At &nbsp; just &nbsp;₹ {product.price}/-  &nbsp; &nbsp;
      <AddProduct onAddProduct={addProduct} /> </p>
      </div>
      </center>
    </div>
  )
}

export default ProductPreview