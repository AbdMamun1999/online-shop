import React from 'react'

// type Props = {}

function SideMenu() {
  return (
    <div className='border px-1 uppercase'>
        <li className='list-none border-b-2 py-2 text-center text-xl'>All Catagoris</li>
      <ul className='flex flex-col'>
        <li className='border-b-2 py-2'>Catalog</li>
        <li className='border-b-2 py-2'>Smart Watch</li>
        <li className='border-b-2 py-2'>Smart Phone</li>
        <li className='border-b-2 py-2'>Camera</li>
        <li className='border-b-2 py-2'>Stationary</li>
        <li className='border-b-2 py-2'>Furniture</li>
        <li className='border-b-2 py-2'>Fashion</li>
        <li className='border-b-2 py-2'>Headphone</li>
      </ul>
    </div>
  )
}

export default SideMenu