import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementProductAmount, decrementProductAmount } from '../Store/cart/CardSlice'
import { clearCart } from '../Store/cart/CardSlice'
import '../styles/cart.css'

const SummaryCard = ({ product }) => {
  const dispatch = useDispatch()
 
  return (
    <div>
     
      <div className="cart">
        
        <div className="name ct">
          <h3>{product.name}</h3>
        </div>
        <div className="image ct">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="price ct">
          <div>{`${product.price}`}</div>
        </div>
        <div className="amt ct">
          <div>{`${product.price * product.amount}`}</div>
        </div>
        <div className="qnt ct">
          <div className="qn">
          <button disabled={product.amount <= 1} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
          <span> &nbsp;{product.amount} &nbsp;</span>
          <button onClick={() => dispatch(incrementProductAmount(product))}>+</button>
          </div>
        </div>
        <div className="del ct">
          <button style={{fontSize: '.8em'}} onClick={()=>dispatch(clearCart())} className='cm'>Delete</button>
        </div>
      </div>
    
    </div>
  )
}

export default SummaryCard