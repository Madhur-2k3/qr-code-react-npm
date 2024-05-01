import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Form from './components/Form'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
       <div className="h-[100vh] bg-gray-600">
            <Header/>
            <Form/>
            <Outlet/>
            <Footer/>
       </div>
    </>
  )
}

export default Layout