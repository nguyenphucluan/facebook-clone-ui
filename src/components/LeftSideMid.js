import React from 'react'
import { leftSideMid } from '../constants'

const LeftSideMid = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <div className='w-full'>Lối tắt của bạn</div>
        <div className='w-full flex justify-end'>
          <a href="##" className='hover:bg-slate-200 text-cyan-600'>
            Chỉnh sửa
          </a>
        </div>   
      </div>
      <div>
        {leftSideMid.map((items)=>(
          <a href={items.href} key={items.id} className='flex flex-row rounded-lg py-1 hover:bg-slate-200'>
            <div className='w-[15%]'>
              <div className='w-full h-full flex justify-center'>
                {items.img}
              </div>
            </div>
            <div className='w-[85%]'>
              {items.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default LeftSideMid
