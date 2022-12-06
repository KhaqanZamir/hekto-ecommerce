import React from 'react';

export default function TrendingCard({item}) {
  return (
    <div className='min-w-[270px] flex-1 p-3 bg-white shadow-style-1'>
        <div className='w-full h-[244px] flex bg-light-gray-2'>
            <img className='m-auto' src={item.itemImage} alt={`trending-${item.key}`} />
        </div>
        <h4 className='text-base font-bold text-off-blue leading-6 text-center'>{item.name}</h4>
        <div className='flex justify-center items-center gap-3 font-normal font-josefin text-off-blue'>
            <span className='text-sm'>{item.newPrice}</span>
            <span className='text-xs opacity-30 line-through'>{item.oldPrice}</span>
        </div>
    </div>
  )
}
