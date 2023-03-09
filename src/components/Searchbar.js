import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex w-full justify-center items-center p-4 animate-slidedown">
      <input className="w-[50%] max-w-[800px] border-none shadow-2xl bg-gray-100 px-4 py-2" type="text" placeholder="Search for movie by title"/>
    </div>
  )
}

export default Searchbar