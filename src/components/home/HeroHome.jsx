import React from 'react';
import HeroSofa from '../../assets/sofa_promotional_header.svg';
import HeroLamp from '../../assets/lamp_header.svg';

export default function HeroHome() {
  return (
    <div className='bg-light-purple w-full flex overflow-hidden'>
      <div className='container items-center mx-auto h-full mb-5 mt-20 md:mb-20 relative'>
        <img className='lamp-hero' src={HeroLamp} alt='lamp_home' />
        <div className='hero-content flex flex-row my-auto w-full h-full'>
          <div className='w-[80%] md:w-[55%]'>
            <p className='font-bold text-base leading-7 text-pink capitalize mt-14'>Best Furniture For Your Castle...</p>
            <h2 className='font-bold text-3xl md:text-[53px] font-josefin mt-3 capitalize leading-tight md:leading-snug'>New furniture collection trends in 2023</h2>
            <p className='font-normal text-base text-gray-text mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <button className='bg-pink mt-10 py-2 md:py-4 px-5 md:px-10 text-white text-base font-josefin relative styled-btn-1'>Shop Now</button>
          </div>
          <div className='w-full block my-10 md:my-20 2xl:my-auto 2xl:w-[45%]'>
            <img className='mx-auto w-[90%] md:w-[70%] lg:w-auto sofa-hero' src={HeroSofa} alt='hero_home' />
          </div>
        </div>
      </div>
    </div>
  )
}
