import React from 'react'

function Cards({ name, prize ,image}) {
  return (
  <div className='h-[25rem] w-80  shadow- border-2 border-zinc-200 rounded-3xl  p-2'>
   <div className='h-72 w-full rounded-4xl overflow-hidden bg-red-200 '>
      <img src={image} alt="" />   
       
 </div>
 <div className='p-2 text-sm'>
    <h1> {name}</h1>
    <div className='flex gap-2 items-center '>
    <h2 className='text-lg'>₹{prize}</h2>
    <h2 className=' opacity-35'><del>₹1555</del></h2>
    <h2 className='text-green-700 text-xs'>80% off</h2>
    </div>
    <div className='flex items-center justify-between'>
    <h2>Size S M L XL</h2>
      <button className='px-2 py-1 bg-black text-white rounded-md'> Details <i class="ri-shopping-cart-fill"></i> </button>  
    </div>
 </div>
  
  </div>
  
  )
}

export default Cards