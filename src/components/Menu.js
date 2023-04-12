import React from 'react'
import { BiGridAlt } from "react-icons/bi";

const Menu = () => {
  return (
    <>
        <div className='w-[45px] h-[45px] hidden lg:flex justify-center my-auto mx-1 bg-slate-200 rounded-full hover:cursor-pointer hover:bg-slate-300'>
            <BiGridAlt className='w-[25px] h-[25px] m-auto'/>
        </div>
    </>
  )
}

export default Menu
