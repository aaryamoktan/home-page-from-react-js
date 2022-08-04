import React from 'react'
import "../../css/middle.css"
const Middle = () => {
  return (
    <div className='middle'>
    <div className='postupload'>
      <input type="text" name="name" className='inputtext' placeholder='Write what you feel ?'/>
      <input type="file" className='file'/>
      <button type="submit" value="shere">sticker</button>


    </div>
    <div className='post'>
      <div className='userpro'>pic<img className='userimg' src="https://i.pinimg.com/originals/d3/be/8d/d3be8d17cdbf549b0971deab2aadacf7.jpg" alt="user"/>
       <div className='time'> time</div>
      <p>shere</p></div>
      <div className='pic'>
      
        <img src="https://i.pinimg.com/originals/d3/be/8d/d3be8d17cdbf549b0971deab2aadacf7.jpg" alt="imgforpost"/>
        <div className='liked'>
        <button className='like'>like</button>
        <button className='comment'>comment</button>
        <button className='shere'>shere</button>
        <button className='save'>save</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Middle