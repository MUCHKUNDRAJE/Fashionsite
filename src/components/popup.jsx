import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog"

  import { toast } from "sonner"
  import { useNavigate } from 'react-router-dom'

function Popup() {

    const navigator = useNavigate();
  const handleOrder = () => {
    const existingCart = JSON.parse(localStorage.getItem("Order")) || [];
    const updatedCart = [...existingCart, ...JSON.parse(localStorage.getItem("Cart"))];
    localStorage.setItem("Order", JSON.stringify(updatedCart));
    localStorage.setItem("Cart", JSON.stringify([]));
    navigator("/Order");
    toast.success("Order Placed Successfully")
 }


  return (

    <Dialog>
    <DialogTrigger >Place the Order <i class="ri-shopping-cart-2-line"></i></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Do you what to place the Order?</DialogTitle>
        <DialogDescription>
            Do you want to further go in the process ?
            <div className='w-full flex items-center justify-around mt-3'>
            <DialogClose asChild>
         <button onClick={handleOrder}
         className='px-4 py-2 bg-orange-600 rounded-md text-white'>Yes</button>
         </DialogClose>
         <DialogClose asChild>
                <button className='px-4 py-2 bg-orange-600 rounded-md text-white'>No</button>
              </DialogClose>
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default Popup