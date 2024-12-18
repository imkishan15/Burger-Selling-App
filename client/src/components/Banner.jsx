import React from 'react'
import '../styles/banner.css'
import logo from '../imgs/logo.png'
import {Link} from 'react-router-dom'



const Banner = () => {
    return (
        <div className='banner'>
            <div className="con">
                <div className="content">
                    <div className="heading">
                        Hello Kishan, <br />
                            Welcome to the world of Burger!!! <br />
                        Feeling hungry? Get the best Taste at your 🏠
                    </div>
                    <div className="bton">
                        <button>
                        Order now
                        </button>
                       <Link to='/menu'> <button id='menu'>See menu</button></Link>
                    </div>
                    
                </div>
            </div>
            <div className="logo">
                <div className="imagel">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Banner