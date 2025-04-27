import React from 'react'
import Nav from '../components/nav'
import Loader from '../components/loader'
import { Button } from "@/components/ui/button"


function  OrderCard( {key , name, prize, image, id}) {
    
  const RemoveCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("Order")) || [];
    const updatedCart = cart.filter(item => item.ID !== id);
    localStorage.setItem("Order", JSON.stringify(updatedCart));
    window.location.reload();
  }
  return (
     <div className='h-full w-[90rem]  rounded-md border-2 p-3'>
                <div className='h-10 w-80 bg-red-400 rounded-md flex items-center justify-center text-white '>
                  OD1234720A537201
                </div>
    
                <div className='h-48 mt-2 rounded-md border-2 w-full flex'>
                  <div className='h-full w-96 p-4  '>
    
                    <div className='flex gap-4'>
    
                    <div className='h-32 w-32  bg-red-100 overflow-hidden rounded-md'>
                      <img src={`${image}`} alt="" />
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>{name}</h1>
                      <h1 className='text-sm text-green-600 font-bold'>Special price</h1>
                      <div className='flex gap-2 items-center '>
                        <h2 className='text-2xl font-semibold'>₹{prize}</h2>
                        <h2 className=' opacity-35'>
                          <del>₹1555</del>
                        </h2>
                        <h2 className='text-green-700 text-xs'>80% off</h2>
                      </div>
                    </div>
    
                    </div>
                  
                  <h1 className='text-center mt-2 flex items-center justify-center gap-2'><i class="ri-truck-fill text-2xl"></i>Delivery Expected by Fri 9 Apr </h1>
    
                  </div>
    
    
    
                  <div className='h-full w-[45rem]'>
                     <div className='h-full w-full flex flex-col  items-center justify-center mt-3'>
                         <div className='h-[4px] w-[30rem] bg-red-100 rounded-md relative  '>
                          <div className='h-[4px] w-[4rem] bg-red-600 '></div>
    
                            <div className='h-3 w-3 rounded-full absolute -top-9 -left-6 font-bold opacity-60 '>
                              Ordered</div> 
                              <div className='h-3 w-3 rounded-full absolute -top-9 left-35 font-bold opacity-60 '>
                              Placed</div> 
                              <div className='h-3 w-3 rounded-full absolute -top-9 left-75 font-bold opacity-60 '>
                              Shipped</div> 
                              <div className='h-3 w-3 rounded-full absolute -top-9 left-115 font-bold opacity-60 '>
                              Delivered </div> 
                            <div className='h-3 w-3 bg-red-600 rounded-full absolute -top-1 left-0'></div>
                            <div className='h-3 w-3 bg-red-300 rounded-full absolute -top-1 left-40'></div>
                            <div className='h-3 w-3 bg-red-300 rounded-full absolute -top-1 left-80'></div>
                            <div className='h-3 w-3 bg-red-300 rounded-full absolute -top-1 left-120'></div>
                         </div>
                         <div className='mt-10 flex items-center justify-center flex-col'>
                            <h1>Seller is porcessing your Order</h1>
                                <div className='flex items-center justify-between gap-30 mt-2'>
                                        <h1>Mon 28</h1>
                                        <h1>7:00pm</h1>
                                        <h1>Payment : COD</h1>
                                </div>
                         </div>
                     </div>
                  </div>
    
    
                  <div className='h-full w-[20rem] p-10 flex items-center gap-3 flex-col'>
                    <h1 className='font-bold text-xl'>₹{prize}</h1>
                      <Button onClick = {()=>RemoveCart(id)} className="bg-red-600"> Cancel Order</Button>
                    <h1><i class="ri-question-line"></i>Need Help</h1>
                      
                  </div>
    
                </div>
    
             </div>
  )
}

export default OrderCard