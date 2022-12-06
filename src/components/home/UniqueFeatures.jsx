import React from 'react';
import Unique_Feature_img from '../../assets/unique_feature.svg'

export default function UniqueFeatures() {
  return (
    <div className='bg-light-purple w-full h-auto mb-16 md:mb-28'>
        <div className='container w-full items-center mx-auto h-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-[95%] mx-auto py-5'>
                <div className='w-full md:w-[48%] min-w-[250px] flex flex-1'>
                    <img className='m-auto w-[90%] lg:w-full' src={Unique_Feature_img} alt='unique-feature' />
                </div>
                <div className='w-full md:w-[48%] min-w-[250px] flex-1'>
                    <h4 className='text-2xl md:text-4xl font-bold tracking-wide text-off-blue font-josefin'>
                        Unique Features Of leatest & Trending Poducts
                    </h4>
                    <ul className='flex flex-col gap-3 list-none mt-4 md:mt-9 ml-3 md:ml-5 w-full unique-features-points'>
                        <li className='text-base text-[#ACABC3] font-normal tracking-[1.5%] leading-snug'>
                            All frames constructed with hardwood solids and laminates
                        </li>
                        <li className='text-base text-[#ACABC3] font-normal tracking-[1.5%] leading-snug'>
                            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                        </li>
                        <li className='text-base text-[#ACABC3] font-normal tracking-[1.5%] leading-snug'>
                            Arms, backs and seats are structurally reinforced
                        </li>
                    </ul>
                    <div className='flex flex-wrap justify-start items-center gap-5 mt-9 w-full'>
                        <button className='bg-pink text-white py-3 px-6 text-base font-semibold tracking-[2%] font-josefin capitalize'>
                            Add to cart
                        </button>
                        <div className='text-sm text-off-blue'>
                            <p className='m-0 font-semibold font-josefin'>B&B Italian Sofa </p>
                            <p className='m-0 font-normal font-lato'>$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
