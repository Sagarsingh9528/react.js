import React, { useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
  useEffect(()=>{
    let newList = food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
    setCate(newList)
  }, [input])
  let items=useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl  hover:bg-green-200'>
      <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>

      <FaSearch className='text-green-500 w-[20px] h-[20px]'/>
      <input type="text" placeholder='Search'className='w-[100%] outline-none text-[16px] md:text[20px] cursor-pointer' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer hover:bg-green-200' onClick={()=>{
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
      <FaBagShopping className='w-[30px] h-[30px] text-green-500'/>
      </div>
    </div>
  )
}

export default Nav
