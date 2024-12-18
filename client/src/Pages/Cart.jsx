import '../styles/cart.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartProducts } from '../Store/cart/CardSlice'
import ProductSummary from '../components/ProductSummary'

const Cart = () => {
  const cart = useSelector(cartProducts)
 

  if (!cart || cart.length === 0) {
    return (
      <div>
        <div className='empty'>
          <center>
            <div className='gt'>
              Your cart is empty! 🥲
            </div>
          </center>
          <Link to='/menu'>
            <center>
              <button className='cm' >
                Go to menu
              </button>
            </center>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ProductSummary  />
      
      
    </div>
  )

}

export default Cart