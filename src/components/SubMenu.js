import React from 'react'
import "../index.css"
import { FiPlus } from "react-icons/fi"

const SubMenu = () => {
  return (
    <>
        <div className='w-[45px] h-[45px] flex lg:hidden justify-center my-auto mx-1 bg-slate-200 rounded-full hover:cursor-pointer hover:bg-slate-300'>     
            <FiPlus className='w-[25px] h-[25px] m-auto'/>             
        </div>
    </>
  )
}

export default SubMenu
