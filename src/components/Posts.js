import React from 'react'
import {FiMoreHorizontal } from "react-icons/fi"
import {AiOutlineLike,AiFillLike,AiOutlineFileGif} from "react-icons/ai"
import {BsChatLeft,BsCamera,BsEmojiSmile,BsEmojiLaughing} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"
import {TbShare3} from "react-icons/tb"
import {MdSend} from "react-icons/md"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {post} from "../constants/index"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const PostCard = ({items})=>(
        <div className='w-full h-full bg-white rounded-xl px-[5%] pt-1 mb-2'>
          <div className="w-full flex flex-row">
            <div className='w-[10%]'>
              <Avatar 
                alt="avatar" 
                src={items.avatar} 
                sx={{ width: 44, height: 44 }} 
                className="border-2 border-slate-100 cursor-pointer"
              />
            </div>
            <div className='w-[60%] flex flex-col'>
              <span className='w-fit font-medium text-base cursor-pointer hover:border-b-2 border-slate-400'>{items.name}</span>
              <span className='w-fit text-sm font-normal cursor-pointer hover:border-b-2 border-slate-400'>{items.times}</span>
            </div>
            <div className='w-[30%] flex justify-end'>
              <FiMoreHorizontal className='w-[26px] h-[26px] cursor-pointer my-2'/>
              <FaTimes className='w-[26px] h-[26px] cursor-pointer my-2 ml-3'/>
            </div>
          </div>
          <div className='gap-1'>
            <ul>
              {/* {post.contents.map((point,index)=>(
                <li key={`post-contents-${index}`}>{point}</li>
              ))} */}
              <li>Heloo</li>
            </ul>
          </div>
          <div className='w-full h-auto'>
            <img src={items.img} alt="" className='w-[100%]'/>
          </div>
          <Stack direction="row" className='relative top-[4px]'>
            <div className="flex w-full">
              <AvatarGroup total={`${items.liked - 3}`} >
                <Avatar alt="Avatar" src={items.avatar} />
                <Avatar alt="Avatar" src={items.avatar}/>
                <Avatar alt="Avatar" src={items.avatar} />
              </AvatarGroup>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex flex-row mx-1 ">{items.comment} <BsChatLeft className='mx-2'/> </div>
              <div className="flex flex-row mx-1 ">{items.share} <TbShare3 className='mx-2'/> </div>
            </div>
          </Stack>
          <div>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" className="text-black my-4">
            <Button variant="text" startIcon={<AiOutlineLike />} className="w-full">
              Thích
            </Button>
            <Button variant="text" startIcon={<BsChatLeft />} className="w-full">
              Bình luận
            </Button>
            <Button variant="text" startIcon={<TbShare3 />} className="w-full">
              Share
            </Button>    
          </Stack>
          </div>
          <div className="w-full flex flex-col h-fit py-4">
            <div className="w-full flex flex-row">
              <div className='w-[10%]'>
                <Avatar 
                  alt="avatar" 
                  src={items.avatar} 
                  sx={{ width: 38, height: 38 }} 
                  className="border-2 border-slate-100 cursor-pointer"
                />
              </div>
              <div className='w-[80%] h-[70px]  flex flex-col pl-3 bg-slate-200 rounded-3xl'>
                <input type="text" placeholder='Viết bình luận công khai...' className='relative bg-slate-200 top-[5px] w-4/5 h-1/2 outline-none bg-none'/>
                <div className='w-full flex flex-row h-1/2'>
                  <div className="w-[10%]"><BsEmojiLaughing className="relative top-[10px] cursor-pointer h-[16px] "/></div>
                  <div className="w-[10%]"><BsEmojiSmile className="relative top-[10px] cursor-pointer h-[16px] "/></div>
                  <div className="w-[10%]"><AiOutlineFileGif className="relative top-[10px] cursor-pointer h-[16px] "/></div>
                  <div className="w-[10%]"><BsCamera className="relative top-[10px] cursor-pointer h-[16px] "/></div>
                  <div className="flex w-[45%] justify-end"><MdSend className="relative cursor-pointer top-[10px] h-[16px]"/></div> 
                </div>
              </div>
            </div>
            <div className="relative top-[5px] w-full flex flex-row">
              <div className="w-[10%]">
                <Avatar 
                  alt="avatar" 
                  src={items.avatar} 
                  sx={{ width: 38, height: 38 }} 
                  className="border-2 border-slate-100 cursor-pointer"
                />
              </div>
              <div className="w-fit h-fit flex flex-col bg-slate-300 rounded-2xl px-2">
                <span className="font-medium">{items.name_user}</span>
                <span>{items.comment_body}</span>
              </div>
            </div>
          </div>
        </div>
);
const Posts = () => {
  return (
    <div className='relative w-full'>
      {post.map((items,id)=>(
        <PostCard key={id} items={items}/>
      ))}
    </div>
  )
}

export default Posts
