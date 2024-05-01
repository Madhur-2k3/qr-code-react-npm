import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <Link to={'/'}>
    <div className=' text-gray-200 bg-gray-900 text-center h-12 flex justify-center items-center font-semibold text-lg'>QR Generator</div>
    </Link>
   
    </>
  )
}

export default Header