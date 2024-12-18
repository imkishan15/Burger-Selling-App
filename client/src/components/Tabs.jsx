import React from 'react'
import TabItem from './TabItem'
import '../styles/card.css'

const Tabs = ({ list, activeTab, onTabSwtich }) => {
  let active = activeTab === '' ? list[0] : activeTab
  return (
    <div className='top'>
       <div className="abc">
       <div className="hed" style={{width: '40%'}}>
            Choose your category👉
         </div>
       </div>
      <div className='flex tab' style={{width: '100%'}}>
        {
          list.map((item, index) => {
            return (        
              <TabItem title={item} key={index} index={index} active={active === item} setActive={onTabSwtich} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Tabs