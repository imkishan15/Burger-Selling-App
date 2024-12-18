import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'
import { clearCart } from '../Store/cart/CardSlice'
import { useDispatch } from 'react-redux'



const Payment = () => {
  const dispatch=useDispatch()
  return (<div className='login'> <br />
    <div className="head" style={{ width: '15%' }}>
      <center>Payment</center>
    </div><br />
    <div className="form">
      <center>
        <div className="con">
          <table>
            <tr>
              <td>UPI ID / Phone no.: </td>
              <td><input type="text" /></td>
            </tr>
           
          </table>
         <Link to='/success'>
         <button onClick={()=>dispatch(clearCart())}>Pay</button>
         </Link>
        </div>
      </center>
    </div>
  </div>

  )
}

export default Payment