import React from 'react'
import Upper from './home1/upper'
import Left from './home1/left'
import Middle from './home1/middle'
import Right from './home1/right'
import "../css/home.css"

const Home = () => {
  return (
    <>
    
    
        <Upper/>
        <div className='contn'>
        <Left/>
        <Middle/>
        <Right/></div>
    </>
  )
}

export default Home