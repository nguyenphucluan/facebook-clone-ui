import React from 'react'
import LeftSideTop from './LeftSideTop'
import LeftSideMid from './LeftSideMid'
import LeftSideBottom from './LeftSideBottom'

const LeftSide = () => {
  return (
    <div className='xss:hidden lg:block lg:w-[25%] h-screen  overflow-y-scroll'>
      <LeftSideTop/>
      <LeftSideMid/>
      <LeftSideBottom/>
    </div>
  )
}

export default LeftSide
