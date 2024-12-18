import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardDetail from '../components/CardDetail'
import Tabs from '../components/Tabs'
import { addToCart } from '../Store/cart/CardSlice'
import { selectAllProducts, fetchProducts } from '../Store/menu/ProductSlice'
import '../styles/card.css'


const Menu = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const [activeTab, setActive] = useState('')
  const [activeIndex, setIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  const Tabswitch = (newTab) => {
    setActive(newTab)
    let category = products.products.map((product) => product.name.name)
    let index = category.findIndex(category => newTab === category)
    if (index > -1) {
      setIndex(index)
    }
    else {
      setIndex(0)
    }
  }

  return (
    <div>
      {
        products.status !== 'fulfilled' ? <div>Loading</div> :
        
          <div> <br />
           
            {
              products.products &&
              <Tabs
                list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwtich={Tabswitch}
              />
            }
             <br />

            <div className="grt">
                Enjoy your day with our delicious BURGERS 👇
            
            </div>
            <div className="flex" style={{ width: '80%', margin: 'auto' }}>
              {
                products.products && products.products[activeIndex].products.map((product, index) => {
                  return (
                    <CardDetail key={index} product={product} onAddProduct={onAddProduct} />
                  )
                })
              }</div>

          </div>
      }
    </div >
  )
}

export default Menu