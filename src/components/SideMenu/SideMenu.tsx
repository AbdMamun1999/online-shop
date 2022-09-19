import React from 'react'

// type Props = {}

function SideMenu() {
  return (
    <div className='border-2 px-1 uppercase rounded-lg w-[90%]'>
        <li className='list-none border-b-2 py-2 text-center text-xl'>All Catagoris</li>
      <ul className='flex flex-col '>
        <li className='border-b-2 py-1'>Catalog</li>
        <li className='border-b-2 py-1'>Smart Watch</li>
        <li className='border-b-2 py-1'>Smart Phone</li>
        <li className='border-b-2 py-1'>Camera</li>
        <li className='border-b-2 py-1'>Stationary</li>
        <li className='border-b-2 py-1'>Furniture</li>
        <li className='border-b-2 py-1'>Fashion</li>
        <li className='border-b-2 py-1'>Headphone</li>
        <li className='border-b-2 py-1'>Headphone</li>
        <li className='border-b-2 py-1'>Headphone</li>
        <li className='border-b-2 py-1'>Headphone</li>
        <li className='py-1'>Headphone</li>
      </ul>
    </div>
  )
}

export default SideMenu