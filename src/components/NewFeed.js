import React from 'react'
import { FiPlus } from "react-icons/fi"
import {BsBookFill,BsYoutube} from "react-icons/bs"
import image from "../assets/images/newfeed.jpg"
import {newFeed} from "../constants/index"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Avatar from '@mui/material/Avatar';

const NewFeed = () => {
  return (
    <div className='bg-white rounded-xl flex flex-col'>
      <div className='w-auto h-[60px] px-[5%] flex flex-row cursor-pointer'>
        <div className='w-full h-full flex flex-row justify-center py-5 border-b-4 border-blue-700'>
          <div className='mx-1'>
            <BsBookFill className='w-[25px] h-[25px] text-blue-700'/>
          </div>
          <div className='mx-1 font-bold text-blue-700'>
            Tin
          </div>
        </div>
        
        <div className='w-full h-full flex flex-row justify-center py-5 rounded-xl hover:bg-slate-200'>
          <div className='mx-1'>
            <BsYoutube className='w-[25px] h-[25px]'/>
          </div>
          <div className='mx-1 font-bold'>
            Reels
          </div>
        </div>
      </div>

      <div className='h-[250px] w-full px-[5%]'>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1368: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper h-[200px] my-[5%]"
        >
          <SwiperSlide className='relative bg-slate-400 rounded-xl cursor-pointer'>
            <img src={image} alt="asdas" className='w-full h-[75%] rounded-t-xl'/>
            <div className='w-full relative flex flex-col top-[-20px]'>
              <div className='w-[40px] h-[40px] bg-blue-600 flex mx-auto border-4 border-slate-400 rounded-full'>
                <FiPlus className='text-center m-auto'/>
              </div>
              <div className='w-full text-center font-medium'>Tạo tin</div>
            </div> 
          </SwiperSlide>
          {newFeed.map((items)=>(
            <SwiperSlide key={items.id} className='relative cursor-pointer hover:opacity-95'>
              <div className='w-full'>
                <img src={items.images} alt="images" className='w-full h-[200px] rounded-xl'/>
              </div>
              <div className="absolute top-3 left-5">
                <Avatar alt="avatar" src={items.avatar} className="border-4 border-cyan-500"/>
              </div>
              <div className="absolute w-full text-center bottom-3 text-white">
                {items.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default NewFeed
