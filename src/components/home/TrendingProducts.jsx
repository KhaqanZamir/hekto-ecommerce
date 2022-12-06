import React from 'react';
import trending_prod_1 from '../../assets/trending_1.svg';
import trending_prod_2 from '../../assets/trending_2.svg';
import trending_prod_3 from '../../assets/trending_3.svg';
import trending_prod_4 from '../../assets/latest_5.svg';
import trending_watch from '../../assets/trending_watch.svg';
import trending_drawers from '../../assets/trending_drawers.svg';
import executive_chair_1 from '../../assets/executive_chair_1.svg';
import executive_chair_2 from '../../assets/executive_chair_2.svg';
import executive_chair_3 from '../../assets/executive_chair_3.svg';
import TrendingCard from './TrendingCard';

export default function TrendingProducts() {

  const trendingItems1 = [
    { name: 'Cantilever Chair', newPrice: '26.00', oldPrice: '42.00', itemImage: trending_prod_1},
    { name: 'Cantilever Chair', newPrice: '26.00', oldPrice: '42.00', itemImage: trending_prod_2},
    { name: 'Cantilever Chair', newPrice: '26.00', oldPrice: '42.00', itemImage: trending_prod_3},
    { name: 'Cantilever Chair', newPrice: '26.00', oldPrice: '42.00', itemImage: trending_prod_4},
  ]

  return (
    <div className='w-full bg-white mt-10 md:mt-16 mb-10 overflow-hidden'>
      <div className='container items-center mx-auto h-auto'>
        <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>Latest Products</h3>
        <div className='flex flex-wrap justify-center items-center gap-7 my-6 md:my-10'>
          { trendingItems1.map( (item, key) =>  
            <TrendingCard item={item} key={key} />
          )}
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 my-6 md:my-10'>

          <div className='min-w-[270px] lg:min-w-[36%] flex-1 bg-light-skin pt-8 px-6 pb-6 min-h-[270px] h-auto relative'>
            <h4 className='text-[26px] font-semibold font-josefin text-off-blue'>23% off on all products</h4>
            <span className='cursor-pointer text-pink text-base font-semibold underline underline-offset-4 mt-3'>
              Shop Now
            </span>
            <img className='absolute right-2 bottom-0 w-[213px]' src={trending_watch} alt="Trending_Watch" />
          </div>

          <div className='min-w-[270px] lg:min-w-[36%] flex-1 bg-light-skin pt-8 px-6 pb-6 min-h-[270px] h-auto relative'>
            <h4 className='text-[26px] font-semibold font-josefin text-off-blue'>23% off on all products</h4>
            <span className='cursor-pointer text-pink text-base font-semibold underline underline-offset-4 mt-3'>
              Shop Now
            </span>
            <img className='absolute right-2 bottom-0 w-[312px]' src={trending_drawers} alt="Trending_Drawers" />
          </div>

          <div className='min-w-[270px] flex-1 flex flex-col gap-5'>

            <div className='flex items-center w-full gap-2'>
              <div className='min-w-[30%] bg-light-gray-2 flex'>
                <img className='m-auto' src={executive_chair_1} alt='Executive_chair_1' />
              </div>
              <div className='flex flex-col justify-center items-start flex-1'>
                <h5 className='text-base font-semibold font-josefin text-off-blue'>Executive Seat Chair</h5>
                <p className='text-xs font-normal font-josefin text-off-blue line-through'>$32.00</p>
              </div>
            </div>

            <div className='flex items-center w-full gap-2'>
              <div className='min-w-[30%] bg-light-gray-2 flex'>
                <img className='m-auto' src={executive_chair_2} alt='Executive_chair_1' />
              </div>
              <div className='flex flex-col justify-center items-start flex-1'>
                <h5 className='text-base font-semibold font-josefin text-off-blue'>Executive Seat Chair</h5>
                <p className='text-xs font-normal font-josefin text-off-blue line-through'>$32.00</p>
              </div>
            </div>

            <div className='flex items-center w-full gap-2'>
              <div className='min-w-[30%] bg-light-gray-2 flex'>
                <img className='m-auto' src={executive_chair_3} alt='Executive_chair_1' />
              </div>
              <div className='flex flex-col justify-center items-start flex-1'>
                <h5 className='text-base font-semibold font-josefin text-off-blue'>Executive Seat Chair</h5>
                <p className='text-xs font-normal font-josefin text-off-blue line-through'>$32.00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
