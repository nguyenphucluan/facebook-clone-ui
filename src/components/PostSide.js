import React from 'react'
import NewFeed from "./NewFeed"
import Status from "./Status"
import Posts from "./Posts"

const PostSide = () => {
  return (
    <div className='xss:w-full md:w-[65%] lg:block lg:w-[50%] px-[5%] h-[3000px]'>
      <NewFeed/>
      <Status/>
      <Posts/>
    </div>
  )
}

export default PostSide
