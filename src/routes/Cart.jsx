import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import Nav from "../components/nav";
import List from "../components/List";
import Popup from "../components/popup";

function Cart() {
  const [cart, setcart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const log = JSON.parse(localStorage.getItem("Cart"));
    if (!log) {
      setcart([]);
      return;
    }
    setcart(log);
    const total = log.reduce((acc, item) => acc + parseInt(item.prize), 0);
    setTotal(total);
  }, []);



  
  return (
    <>
      <Nav />
      <Loader />
      
      


      <div id="home" className="h-screen w-full bg-white text-black flex">
        <div className="h-full w-[80%]   flex items-start py-23 justify-center relative ">
          <div className="h-[30rem] w-[90%] rounded-md ">
            <div className="h-16 w-full p-5 bg-[#F1F3F6] flex items-center justify-between">
              <h1 className="text-zinc-500">From Saved Address</h1>
              <div>
                <button className="p-2  text-xs font-normal text-blue-600   border-[1px] border-zinc-400 ">
                  Add Delivery Pincode{" "}
                </button>
              </div>
            </div>

            <div className=" h-[28rem] w-full hide-scrollbar overflow-auto">
              {cart?.length === 0 ? (
                  <div className='h-64 mt-3 w-full bg-[#F1F3F6] flex items-center justify-center text-red-500'> No items</div> 
              ) : (
                cart?.map((items, index) => (
                  <List
                    img={items.img}
                    name={items.name}
                    prize={items.prize}
                    key={index}
                    id={items.ID}
                  />
                ))
              )}
            </div>
            <div className="h-16 w-full mt-3 rounded-md  p-5 bg-[#F1F3F6] flex items-center justify-between">
              <div>
                Place Order Here <i class="ri-shopping-cart-2-line"></i>
              </div>
              <Popup />
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 py-23 -ml-6">
          <div className=" w-[35rem] rounded-md p-3 bg-[#F1F3F6]">
            <h1 className=" capitalize text-md font-bold text-zinc-600">
              Price details
            </h1>
            <div className="w-full  h-[1px] bg-zinc-500"></div>
            <div className="w-full h-10 flex items-center justify-between px-4">
              <h1>Price</h1>
              <h2>{total}</h2>
            </div>
            <div className="w-full h-10 flex items-center justify-between px-4">
              <h1>Discount</h1>
              <h2>-100</h2>
            </div>
            <div className="w-full h-10 flex items-center justify-between px-4">
              <h1>Delivery Charges</h1>
              <h2>Free</h2>
            </div>
            <div className="w-full  h-[1px] bg-zinc-400"></div>
            <div className="w-full h-10 flex items-center justify-between px-4">
              <h1>Total Amount</h1>
              <h2>
                <b>{total - 100}</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
