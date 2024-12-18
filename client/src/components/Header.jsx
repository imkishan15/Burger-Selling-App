import logo from '../imgs/quote.jpg'
import cart from '../imgs/cart.png'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

export const Header = ({ cartcount }) => {
    return (
        <div className="nav">
            <h6><br /></h6>
            <nav className="navbar">
                <Link to='/home'>
                    <div className="logo_pic"><img src={logo} alt="" /></div>
                </Link>
                <div className="mid">
                    <div className='menu'><Link to='/home'>Home</Link></div>
                    <div className='menu'><Link to='/about'>About us</Link></div>
                </div>
                <div className="right">
                    <div className='menu mr-4 relative'><Link to='/cart'><img src={cart} alt="cart" />
                        {cartcount > 0 ? <div style={{ width: '1.7em', fontSize: '0.8em', marginTop: '0.2em', background: 'yellow', color: 'red' }} className='rounded-full text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1'>{cartcount}</div> : null} </Link></div>
                    {/* <div className='menu'><Link to='/login'>Logout</Link></div> */}
                    {/* <div className='menu'><Link to='/register'>Signup</Link></div> */}
                </div>
            </nav>
        </div>
    )
}