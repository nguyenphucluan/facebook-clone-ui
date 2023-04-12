import React from 'react'
import {activeUser} from "../constants/index"
import {FiMoreHorizontal} from "react-icons/fi"
import {MdVideoCall} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const RightSide = () => {
  return (
    <div className='xss:hidden md:block md:w-[35%] lg:block lg:w-[25%] flex flex-col'>
      <div className='flex flex-row'>
        <span className='w-[64%] font-semibold text-slate-400'>Người liên hệ</span>
        <MdVideoCall className='w-[28px] h-[28px] px-1 rounded-full cursor-pointer hover:bg-slate-200'/>
        <BsSearch className='w-[28px] h-[28px] px-1 rounded-full cursor-pointer hover:bg-slate-200'/>
        <FiMoreHorizontal className='w-[28px] h-[28px] px-1 rounded-full cursor-pointer hover:bg-slate-200'/>
      </div>
      <div className='flex flex-col'>
        {activeUser.map((items)=>(
            <div key={items.id} className='cursor-pointer relative flex flex-row my-1 rounded-xl hover:bg-slate-200'>
                <div className='w-[20%]'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="avatar" src={items.avatar} />
                </StyledBadge>
                </div>
                <div className='relative top-[4px] w-[80%] font-medium'>{items.name}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RightSide
