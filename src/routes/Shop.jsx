import React from 'react'
import Nav from '../components/nav'
import Cards from '../components/cards'
import ShopItems from '../utils/database'
import { Link } from 'react-router-dom'
import Loader from '../components/loader'


function Shop() {
    
  return (
    <>
    <Loader/>
    <div id='home' className='min-h-[150vh] w-full bg-white'>
        <Nav/>
    <div className='w-full h-screen py-17 text-black p-20 '>
        <div className=' w-58 relative'> 
        <input className='border-[1.2px] border-zinc-300 px-2 py-2  rounded-md outline-none' placeholder='Search' type=" " />
        <i className='ri-search-2-line absolute top-2 right-1 ' ></i>
        </div>
        <div className='h-10 w-80   mt-3 rounded-md overflow-hidden flex border-[1px] border-zinc-300'>
            <div className='w-20 h-full flex items-center justify-center border-r-[1px] border-zinc-300 bg-zinc-100 text-zinc-500'>
                All
            </div>
            <div className='w-20 h-full flex items-center border-r-[1px] border-zinc-300 justify-center  '>
                Mens
            </div>
            <div className='w-20 h-full flex items-center border-r-[1px] border-zinc-300   justify-center  '>
                Women
            </div>
            <div className='w-20 h-full flex items-center justify-center  '>
                Other
            </div>
        </div>
            <div className='min-h-full w-full flex flex-wrap items-center justify-center gap-2 mt-8' >
              {ShopItems.map((items)=>(
              <Link to={`/Show/${items.ID}`}>
              <Cards name={items.name} prize={items.prize} image={items.img}/>
              </Link>
              ))}
              
            </div>
    </div>


    </div>
    </>
  )
}

export default Shop