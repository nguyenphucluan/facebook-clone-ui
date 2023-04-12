import React from 'react'
import "../index.css"
import { BsMessenger} from "react-icons/bs"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {FiMoreHorizontal} from "react-icons/fi"
import {BsFillCameraVideoFill,BsSearch} from "react-icons/bs"
import {MdUnfoldMoreDouble} from "react-icons/md"
import {BiMessageSquareEdit} from "react-icons/bi"
import {messenger} from "../constants/index"

const Messenger = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const styles = {
        position: 'absolute',
        width:"350px",
        height:"auto",
        top: 60,
        right: 15,
        zIndex: 1,
        p: 1,
        bgcolor: 'background.paper',
    };
  return (
    <>
        <div onClick={handleClick} className='w-[45px] h-[45px] flex justify-center my-auto mx-1 bg-slate-200 rounded-full hover:cursor-pointer hover:bg-slate-300'>
            <BsMessenger  className='w-[25px] h-[25px] m-auto'/>
        </div>
        {open ? (
            <Box sx={styles} className="outline-none rounded-xl shadow-lg shadow-gray-200">
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <span className='w-[50%] text-black font-bold'>Chat</span>
                        <Stack direction="row" justifyContent="flex-end">
                            <IconButton color="secondary" component="label">
                                <FiMoreHorizontal/>
                            </IconButton>
                            <IconButton color="secondary" component="label">
                                <MdUnfoldMoreDouble/>
                            </IconButton>
                            <IconButton color="secondary" component="label">
                                <BsFillCameraVideoFill/>
                            </IconButton>
                            <IconButton color="secondary" component="label">
                                <BiMessageSquareEdit/>
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Stack direction="row" className='relative'>
                        <BsSearch className='relative top-[5px]'/>
                        <input type="text" placeholder="Tìm kiếm trên Messenger" className='w-full'/>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <span className='bg-blue-200 px-3 py-1 text-cyan-500 rounded-xl cursor-pointer'>Hộp thư</span>
                        <span className='px-3 py-1'>Cộng đồng</span>
                    </Stack>
                    <Stack>
                        {messenger.map((items)=>(
                            <Stack key={items.id} direction="row" spacing={1}>
                                <Avatar 
                                    alt="avatar" 
                                    src={items.avatar} 
                                    sx={{ width: 60, height: 60 }} 
                                    className="border-2 border-slate-100 cursor-pointer"
                                />
                                <Stack>
                                    <span>{items.name}</span>
                                    <span>{items.message}</span>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        ) : null}
    </>
    
  )
}

export default Messenger
