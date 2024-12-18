import React from 'react'
import '../styles/card.css'
const CardDetail = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product)
  }
  return (
    <div className='card' style={{ margin: '2em' }}>
      <div className="cardwrap">
        <center>
          <div className="pic">
            <img src={product.imageUrl} alt={product.name} style={{ height: '5em' }} />
          </div>
          <div className="name">
            <h4>{product.name}</h4>
          </div>
          {/* <div className="des">
          <p>{product.desciption}</p>
        </div> */}
          <div className="price">
            ₹ {product.price}/-
          </div>

          <div className="btn">
            <button onClick={addProduct}>Add to Cart</button>
          </div>
        </center>
      </div>

    </div>
  )
}

export default CardDetail