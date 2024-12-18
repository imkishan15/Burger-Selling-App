import React from 'react'
import '../styles/preview.css'
import add from '../imgs/add.png'

const AddProduct = ({onAddProduct}) => {
  return (
    <div className='add'>
      <img onClick={onAddProduct} src={add} alt="" />
    </div>
  )
}

export default AddProduct