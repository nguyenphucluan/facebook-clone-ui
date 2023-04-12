import React from 'react'
import {leftSideTop} from  "../constants/index"

const LeftSideTop = () => {
  return (
    <div className='flex flex-col'>
      {leftSideTop.map((items)=>(
        <a href={items.href} key={items.id} className='flex flex-row rounded-lg py-1 hover:bg-slate-200'>
          <div className='w-[15%]'>
            <div className='w-full h-full flex justify-center'>
              {items.icon}
            </div>
          </div>
          <div className='w-[85%]'>
            {items.text}
          </div>
        </a>
      ))}
    </div>
  )
}

export default LeftSideTop
