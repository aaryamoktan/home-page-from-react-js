import React from 'react'
import Leftupper from './left/Leftupper'
import Downupper from './left/Downupper'
import "../../css/left.css"
const Left = () => {
  return (
    <>
    <div className='left'>
    <Downupper/>
      <Leftupper/>
    </div>
      
    </>
  )
}

export default Left