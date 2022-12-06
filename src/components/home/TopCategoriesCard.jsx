import React from 'react'

export default function TopCategoriesCard({item}) {
  return (
    <div className='w-[90%] mx-auto h-auto'>
        <div className='w-full h-auto relative'>
            <div className='absolute w-[99%] h-[99%] left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-off-purple-2 rounded-full'></div>
            <div className='h-[269px] p-7 w-full bg-light-gray-2 shadow-style-1 rounded-full flex relative hover:translate-x-[10px] hover:translate-y-[-10px] duration-500 top-category-media'>
                <img className='max-w-[75%] mx-auto mt-1 object-scale-down' src={item.myImage} alt={`top-`} />
                <button className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-light-green text-white px-4 py-2 text-xs font-josefin'>View Details</button>
            </div>
        </div>
        <p className='text-xl font-josefin font-normal text-dark-blue text-center mt-5'>{item.name}</p>
        <p className='text-base font-josefin font-normal text-dark-blue text-center mt-1'>{item.price}</p>
    </div>
  )
}
