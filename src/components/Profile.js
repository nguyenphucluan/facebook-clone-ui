import React from 'react'
import "../index.css"
import Avatar from '@mui/material/Avatar';
import image from "../assets/images/newfeed.jpg"
import Box from '@mui/material/Box';

const Profile = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const styles = {
        position: 'absolute',
        top: 100,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };
  return (
    <>
        <div className='w-[45px] h-[45px] flex justify-center my-auto mx-1 bg-slate-200 rounded-full hover:cursor-pointer hover:bg-slate-300'>
            <Avatar 
                alt="avatar" 
                src={image} 
                sx={{ width: 45, height: 45 }} 
                className=""
            />
        </div>
        {open ? (
            <Box sx={styles}>
                Click me, I will stay visible until you click outside. profile
            </Box>
        ) : null}
    </>
  )
}

export default Profile
