import React from "react";
import Nav from "../components/nav";
import Loader from "../components/loader";

function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <div className="w-full h-screen bg-white overflow-hidden ">
        <div className=" absolute top-0 opacity-50 w-full h-screen bg-[url('https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] z-10">
      
       
        </div>
        <div id="logo" className="h-full w-full  py-20 flex flex-col items-start justify-center text-red-600 text-8xl z-30   ">
          <p className="text-xl opacity-100 ml-28 ">
            Welcome to{" "}
            <span className="bg-red-600 text-white p-2 rounded-3xl z-30">
              FashionSite
            </span>
          </p>
          <h1 className="z-30 ml-28 leading-[1] ">
            Bringing Everything You Need,
            <br /> Right to Your Door.
          </h1>
        </div>

        <div className="h-96 w-96 flex items-center bg-red-300 justify-center gap-10 z-60">
            
        </div>
      </div>
    </>
  );
}

export default Home;
