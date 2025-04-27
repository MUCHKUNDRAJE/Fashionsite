import React from "react";
import { useParams } from "react-router-dom";
import ShopItems from "../utils/database";
import getItemByID from "../utils/findShop";
import Nav from "../components/nav";
import Loader from "../components/loader";
import { Button } from "@/components/ui/button"
import { Toaster } from "../components/ui/sonner";
import gsap from "gsap";

function Item() {
  const { id } = useParams();
  const items = getItemByID(id);

  const  AddItemInCart = () =>{
    const existingCart = JSON.parse(localStorage.getItem("Cart")) || [];
    const updatedCart = [...existingCart, items];
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
        gsap.fromTo("#check", {opacity: 0}, {opacity: 1, duration: 0.5});
        gsap.to("#check", {opacity: 0, duration: 0.5, delay: 1});
  }

  return (
    <>
    <Loader/>
      <div className="h-screen w-full bg-white  overflow-hidden">
        <Nav />

        <div id="check" className="h-10  rounded absolute top-20  left-1/2 -translate-x-1/2   bg-slate-200 text-black flex items-center justify-center p-5 gap-2 opacity-0">
        <i class="ri-checkbox-circle-fill text-green-600 text-2xl "></i>Item Added in the Cart
        </div>
        <div className="h-full w-full  py-20 px-20 ">
          <div className="h-[40rem] w-full  rounded-md flex ">
            <div className=" h-full  ">
              <img src={`${items.img}`} alt="" />
            </div>
            <div id="home" className=" h-full w-1/2 text-black p-10 ">
              <h1 className="text-3xl ">{items.name}</h1>
              <h1 className="text-sm text-green-600 font-bold">Special price</h1>

              <div className="flex gap-2 items-center ">
                <h2 className="text-2xl font-semibold">₹{items.prize}</h2>
                <h2 className=" opacity-35">
                  <del>₹1555</del>
                </h2>
                <h2 className="text-green-700 text-xs">80% off</h2>
              </div>

              <div className="flex gap-2 items-center ">
                <div className="px-2 rounded-4xl text-white flex items-center justify-center gap-1  bg-green-600">
                         3.8 
                       <i class="ri-star-fill"></i>
                </div>
                <h2 className=" opacity-35">
                   40,549 ratings and 2,674 reviews
                </h2>
                <h2 className="text-green-700 text-xs">80% off</h2>
              </div>

              <div className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, veritatis sed quaerat nam fugit ab delectus animi eveniet ad omnis repellat earum aperiam recusandae harum sint, sunt eius, minima similique!
              </div>

              <div className="flex gap-3 mt-5">
                <button onClick={AddItemInCart} id="home" className="px-10 py-3 bg-black text-white rounded-2xl hover:bg-white hover:outline-2 hover:text-black cursor-pointer transition-all ease duration-500 font-bold" > Add to Cart  <i class="ri-shopping-cart-2-line"></i> </button>
              
                    </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
