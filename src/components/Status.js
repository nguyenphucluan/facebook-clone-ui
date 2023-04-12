import React,{useState} from 'react'
import image from "../assets/images/newfeed.jpg"
import {BsFillCameraVideoFill,BsImages,BsEmojiSmileFill,BsFillFlagFill} from "react-icons/bs"
import {CiFaceSmile} from "react-icons/ci"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {AiFillCamera} from "react-icons/ai"
import {FaUserAlt,FaTimes} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {FiMoreHorizontal} from "react-icons/fi"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border:'none',
  borderRadius:2,
  outline:"none",
  p: 4,
};

const Status = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='relative flex flex-col w-full h-[130px] rounded-xl bg-white my-3 px-[5%]'>
      <div className='relative flex flex-row h-1/2 top-[5%]'>
        <div className='w-[10%]'>
          <Avatar 
            alt="avatar" 
            src={image} 
            sx={{ width: 40, height: 40 }} 
            className="border-2 border-slate-100"
          />
        </div>
        <div onClick={handleOpen} className='w-[90%] cursor-pointer hover:bg-slate-200 h-[50px] border-2 border-slate-100 bg-slate-100 rounded-3xl py-auto'>
          <span className='relative top-[20%] left-5'>Luân, bạn đang nghĩ gì thế?</span> 
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Button 
              onClick={handleClose} 
              className="absolute top-[-10px] left-[500px] "
            >
                <FaTimes className="w-[25px] h-[25px] text-black"/>
            </Button>
            <Stack direction="row">
              <Avatar 
                alt="avatar" 
                src={image} 
                sx={{ width: 46, height: 46 }} 
                className="border-2 border-slate-100 cursor-pointer"
              />
              <Stack direction="column">
                  <span className="font-semibold">Nguyễn Phúc Luân</span>
                  <span className="font-semibold text-xs">Công khai</span>
              </Stack>
            </Stack>
            <textarea 
              type="text" 
              placeholder="Luân ơi, bạn đang nghĩ gì thế" 
              className="resize-none w-full h-[100px] outline-none"
            />
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{
                border:"1px solid gray",
                paddingY:"5px",
                borderRadius:2
              }}
            >
              <Button sx={{color:"black",fontSize:"13px",fontWeight:'bold'}}>
                Thêm vào bài viết của bạn
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton color="secondary" component="label">
                <input hidden accept="image/*" type="file" />
                <AiFillCamera/>
              </IconButton>
              <IconButton color="primary" component="label">
                <input hidden accept="image/*" type="file" />
                <FaUserAlt/>
              </IconButton>
              <IconButton color="secondary" component="label">
                <input hidden accept="image/*" type="file" />
                <BsEmojiSmileFill/>
              </IconButton>
              <IconButton color="primary" component="label">
                <input hidden accept="image/*" type="file" />
                <HiLocationMarker/>
              </IconButton>
              <IconButton color="secondary" component="label">
                <input hidden accept="image/*" type="file" />
                <BsFillFlagFill/>
              </IconButton>
              <IconButton>
                <FiMoreHorizontal/>
              </IconButton>
            </Stack>
            <Button variant="contained" sx={{width:"100%",marginTop:"15px"}} disabled>
              Đăng
            </Button>
            
          </Box>
        </Modal>
      </div>
      <div className='flex flex-row h-1/2'>
        <div className='w-full h-2/3  flex flex-row hover:bg-slate-100 cursor-pointer rounded-xl my-auto'>
          <BsFillCameraVideoFill className='text-red-600 my-auto w-[24px] h-[24px]'/>
          <span className='font-medium text-base my-auto ml-1'>Vidieo trực tiếp</span> 
        </div>
        <div onClick={handleOpen} className='w-full h-2/3 flex flex-row hover:bg-slate-100 cursor-pointer rounded-xl my-auto'>
          <BsImages className='text-sky-800 my-auto w-[24px] h-[24px]'/>
          <span className='font-medium text-base my-auto ml-1'>Ảnh/video</span> 
        </div>
        <div onClick={handleOpen} className='xss:hidden sm:flex sm:w-full h-2/3  flex flex-row hover:bg-slate-100 cursor-pointer rounded-xl my-auto'>
          <CiFaceSmile className='text-yellow-400 my-auto w-[24px] h-[24px]'/>
          <span className='font-medium text-base my-auto ml-1'>Cảm xúc/hoạt động</span>
        </div>
      </div>
    </div>
  )
}

export default Status
