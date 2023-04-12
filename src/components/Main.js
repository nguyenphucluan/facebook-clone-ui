import React from 'react'
import LeftSide from "./LeftSide"
import PostSide from "./PostSide"
import RightSide from "./RightSide"

const Main = () => {
  return (
    <div className='relative flex flex-row top-[3%]'>
      <LeftSide/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default Main
