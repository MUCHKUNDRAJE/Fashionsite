import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id='home' className='h-10 w-full flex items-center justify-between px-20 py-8 bg-white text-black fixed z-100 '>
        <div><span id="logo" className='bg-red-600 text-white p-2 text-xl rounded-3xl z-30'>FashionSite</span></div>
        <div className='flex items-center justify-between gap-10'>
           
            
          <Link to={"/"}><h1>Home</h1></Link>
          <Link to={"/shop"}><h1>Shop</h1></Link>
          <Link to={"/Cart"}><h1>Cart</h1></Link>
          <Link to={"/Order"}><h1>Order</h1></Link>
         
        </div>
    </div>
  )
}

export default Nav