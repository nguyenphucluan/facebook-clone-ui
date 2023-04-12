import React from 'react'
import "../index.css"
import { AiFillFacebook,AiFillHome,AiTwotoneVideoCamera } from "react-icons/ai";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaShopify,FaGamepad,FaSearch } from "react-icons/fa"
import { FiMenu} from "react-icons/fi"
import Stack from '@mui/material/Stack';
import Messenger from "./Messenger"
import Profile from "./Profile"
import Menu from "./Menu"
import SubMenu from "./SubMenu"
import Notification from './Notification';

const NavBar = () => {
  
  return (
    <>
        <Stack 
          direction="row" 
          sx={{
            zIndex:10,
            paddingX:"5px"
          }} 
          className='fixed left-0 top-0 w-full h-[60px] bg-white'
        >
          <Stack direction="row" className='w-[25%] h-full'>
            <a href="##" className='xss:w-1/2 md:w-1/5 h-full flex-start'>
              <AiFillFacebook className='relative text-cyan-700 w-full h-full left-[0px]'/>
            </a>
            <Stack direction="row" className='w-full bg-slate-100 rounded-3xl my-3'>
              <FaSearch className='text-slate-500 relative top-[10px] left-[5px]'/>
              <input type="text" placeholder='Tìm kiếm trên facebook' className='text-black w-full ml-2 rounded-3xl bg-slate-100  outline-none'/>
            </Stack>  
          </Stack>

          <Stack direction="row" justifyContent="space-evenly" className='xss:w-[10%] md:w-[50%] h-full'>  
            <div className='w-full h-full xss:hidden md:flex justify-center border-blue-700 border-b-2 cursor-pointer '>
              <AiFillHome className='text-blue-700 w-[30px] h-[30px] m-auto'/>
            </div>
            <div className='w-full h-full xss:hidden md:flex justify-center  cursor-pointer rounded-xl hover:bg-slate-200'>
              <AiTwotoneVideoCamera className='text-slate-500 w-[30px] h-[30px] m-auto'/>
            </div>
            <div className='w-full h-full xss:hidden md:flex justify-center cursor-pointer rounded-xl hover:bg-slate-200'>
              <FaShopify className='text-slate-500 w-[30px] h-[30px] m-auto'/>
            </div>
            <div className='w-full h-full xss:hidden md:flex justify-center cursor-pointer rounded-xl hover:bg-slate-200'>
              <MdSupervisedUserCircle className='text-slate-500 w-[30px] h-[30px] m-auto'/>
            </div>

            <div className='w-full h-full xss:hidden lg:flex justify-center cursor-pointer rounded-xl hover:bg-slate-200'>
              <FaGamepad className='text-slate-500 w-[30px] h-[30px] m-auto '/>
            </div>  
            <div className='w-full h-full xss:flex lg:hidden justify-center cursor-pointer rounded-xl hover:bg-slate-200'>
              <FiMenu className='text-slate-500 w-[30px] h-[30px] my-auto md:m-auto '/>
            </div> 
          </Stack>

          <Stack direction="row" justifyContent="flex-end" className='xss:w-[65%] md:w-[25%] h-full'>
            <SubMenu/>
            <Menu/>
            <Messenger/>
            <Notification/>
            <Profile/>
          </Stack>
        </Stack>
    </>
  )
}

export default NavBar
