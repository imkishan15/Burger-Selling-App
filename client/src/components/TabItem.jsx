import React from 'react'
import '../styles/card.css'
const TabItem = ({title,index,active,setActive}) => {
    const classname=active? 'border-b-yellow-400':'border-none text-slate-600'

  return (
    <div className='tb'>
        <div className='tab'>
      
            <button onClick={()=>setActive(title)} >
                <span className={`${classname}`}>{title.toUpperCase()}</span>
            </button>
      
        </div> 
        
    </div>
  )
}

export default TabItem