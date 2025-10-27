import Image from 'next/image'
import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Search' />
        <button className='cursor-pointer'>
          {/* <Image src={}/> */}
        </button>
      </form>
    </div>
  )
}
