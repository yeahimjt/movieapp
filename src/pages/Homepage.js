import React from 'react'
import {Discover, Trending} from './index'

const Homepage = () => {
  return (
    <div className="">
        <Discover limit={true}/>
        <Trending/>
    </div>
  )
}

export default Homepage