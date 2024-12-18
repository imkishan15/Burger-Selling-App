import React, { useEffect, useState } from 'react'
import ProductPreview from './ProductPreview'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/preview.css'
import '../styles/card.css'
import {useDispatch} from 'react-redux'
import { addToCart} from '../Store/cart/CardSlice';


const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch=useDispatch()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))

    }, [])

    const onAddProduct=(product)=>{
      dispatch(addToCart(product))
    }
    

    return (
        <div className='product'>
           <center><span className='grt' style={{width: '20%', fontSize:'1.7em', padding:'0.2em', background:'black'}}> Our Burgers😋 </span></center>
            <Carousel responsive={responsive}>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <div className="preview">               
                            <ProductPreview key={index} product={product} onAddProduct={onAddProduct}/>
                        </div>
                    )
                })
            }
            </Carousel>
        </div>

    )
}

export default Products