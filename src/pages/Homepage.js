import React, {useState} from 'react'
import {Discover, Trending} from './index'

const Homepage = () => {
  return (
    <div className="">
        <Discover limit={true}/>
        <Trending limit={true}/>
    </div>
  )
}

export default Homepage