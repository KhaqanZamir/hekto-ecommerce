import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LatestCard({item}) {
  return (
    <div className='min-w-[280px] md:min-w-[30%] flex-1 h-auto mx-auto cursor-pointer latest-product-card'>
        <div className='w-full h-[300px] flex bg-light-gray-3 hover:bg-white relative'>
            <div className='absolute top-0 left-0 text-white ribbon ribbon-top-left'>
                <span>Sale</span>
            </div>
            <img className='m-auto' src={item.productImage} alt='latest_product' />
            <div className='absolute bottom-3 left-3 flex flex-col gap-3'>
                <button className='bg-light-gray flex p-2 w-10 h-10 rounded-full'>
                    <FontAwesomeIcon className='text-[#3F509E] m-auto' icon={faCartShopping}/>
                </button>
                <button className='bg-light-gray flex p-2 w-10 h-10 rounded-full'>
                    <FontAwesomeIcon className='text-[#3F509E] m-auto' icon={faHeart}/>
                </button>
                <button className='bg-light-gray flex p-2 w-10 h-10 rounded-full'>
                    <FontAwesomeIcon className='text-[#3F509E] m-auto' icon={faMagnifyingGlassPlus}/>
                </button>
            </div>
        </div>
        <div className='w-full flex justify-between items-center gap-5 font-josefin py-2'>
            <span className='text-base text-off-blue'>{item.name}</span>
            <div>
                <span className='text-sm text-off-blue'>{item.newPrice}</span>
                <span className='text-sm text-pink line-through mx-2'>{item.oldPrice}</span>
            </div>
        </div>
    </div>
  )
}
