import React from 'react'
import "../index.css"
import {BsFillBellFill } from "react-icons/bs"

const Notification = () => {
  return (
    <>
        <div className='w-[45px] h-[45px] flex justify-center my-auto mx-1 bg-slate-200 rounded-full hover:cursor-pointer hover:bg-slate-300'>
            <BsFillBellFill className='w-[25px] h-[25px] m-auto'/>
        </div>
    </>
  )
}

export default Notification
