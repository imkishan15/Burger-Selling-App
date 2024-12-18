import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartProducts } from '../Store/cart/CardSlice'
import SummaryCard from './SummaryCard'
import '../styles/cart.css'


const ProductSummary = () => {
  const cart=useSelector(cartProducts)
  return (
   <div className="sum">
     <center>
        <div className='gt' style={{ width: '22%', fontSize: '2em' }}>Product Summary</div>
      </center>
    <center>
      <div className="whole" style={{borderRadius: '1em',    background: '#000000a1',width: '70%',padding:'1em'}}>
        <div className="cart">
        <div>Name</div>
        <div>Image</div>
        <div>Price</div>
        <div>Amount</div>
        <div>Quantity</div>
      </div>
    <div>
      {
        cart && cart?.map((product,index)=>{
          return(
            <SummaryCard product={product} key={index}/> 
          )
        })
      }
     </div>
      </div>
    </center>
     <br />
        <center><Link to='/address'>
            <button className='cm'>Next</button>
        </Link></center>
   </div>
  )
}

export default ProductSummary