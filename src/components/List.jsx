import React from 'react'

function List({img , name , prize , key , id }) {

  const RemoveCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("Cart")) || [];
    const updatedCart = cart.filter(item => item.ID !== id);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    window.location.reload();
  }
   

  return (
    <div className='h-64 mt-3 w-full bg-[#F1F3F6] flex'>
    <div className='h-full w-[30%] flex items-center justify-center  overflow-hidden'>
     <img src={`${img}`} alt="" />
    </div>
    <div className='h-full p-3 w-full '>
      <div className='flex items-center justify-between'>
       <h1 className="text-1xl ">{name}</h1>
      <i onClick={ ()=> RemoveCart (id)} class="ri-close-fill cursor-pointer hover:bg-red-200 px-2 py-1   rounded-full"></i>
      </div>
    <h1 className="text-sm mt-1 text-green-600 font-bold">Special price</h1>
    <div className="flex gap-2 items-center mt-2 ">
     <h2 className="text-2xl font-semibold">₹{prize}</h2>
     <h2 className=" opacity-35">
       <del>₹1555</del>
     </h2>
     <h2 className="text-green-700 text-xs">80% off</h2>
   </div>

   <div className="flex gap-2 items-center mt-1 ">
     <div className="px-2 rounded-4xl text-white flex items-center justify-center gap-1  bg-green-600">
              3.8 
            <i class="ri-star-fill"></i>
     </div>
     <h2 className=" opacity-35">
        40,549 ratings and 2,674 reviews
     </h2>
     <h2 className="text-green-700 text-xs">80% off</h2>
   </div>

   <div className="mt-4 text-sm w-[30rem]">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, veritatis sed quaerat nam fugit ab delectus animi eveniet ad omnis repellat earum aperiam recusandae harum sint, sunt eius, minima similique!
   </div>
 
     </div> 


 </div> 
  )
}

export default List