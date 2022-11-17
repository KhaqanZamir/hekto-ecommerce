import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FeaturedCard({item}) {
  
  return (
    <div className='w-[90%] mx-auto h-auto shadow-style-1 featured-product'>
        <div className='h-[240px] w-full bg-light-gray-2 flex relative'>
          <div className='absolute top-3 left-3 flex justify-start items-center gap-5 text-sm featured-functions'>
            <button><FontAwesomeIcon className='text-[#1389FF]' icon={faCartShopping}/></button>
            <button><FontAwesomeIcon className='text-[#1389FF]' icon={faHeart}/></button>
            <button><FontAwesomeIcon className='text-[#1389FF]' icon={faMagnifyingGlassPlus}/></button>
          </div>
          <img className='m-auto' src={item.myImage} alt='featured-product' />
          <button className='absolute bottom-3 left-[50%] -translate-x-[50%] rounded-sm bg-green-400 text-xs text-white  px-3 py-2'>View Details</button>
        </div>
        <div className='p-4 featured-product-content bg-white'>
            <p className='text-lg font-bold text-pink text-center'>{item.name}</p>
            <div className='flex items-center justify-center gap-1 mt-3'>
              <span className='h-1 w-4 rounded-sm cursor-pointer bg-green-400'></span>
              <span className='h-1 w-4 rounded-sm cursor-pointer bg-pink'></span>
              <span className='h-1 w-4 rounded-sm cursor-pointer bg-dark-blue'></span>
            </div>
            <p className='mt-4 text-sm font-josefin text-center'>Code - {item.code}</p>
            <p className='mt-1 text-sm font-josefin text-center'>${item.price}</p>
        </div>
    </div>
  )
}
