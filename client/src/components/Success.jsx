import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success'> <br /> <br />
        <div className="grt" style={{fontSize: '2em', width:'50%'}}>
            Your payment has been made successful!!! 🥳
        </div>
        <center>
        <div className="btn">
         <Link to='/home'>
         <button style={{fontSize: '1.5em'}}>
            Go to Home
          </button>
         </Link>
        </div>
        </center>
    </div>
  )
}

export default Success