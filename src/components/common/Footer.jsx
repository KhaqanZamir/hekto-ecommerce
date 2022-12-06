import React from 'react';
import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className='bg-light-purple w-full h-auto py-10 md:py-20'>
        <div className='container mx-auto h-auto'>
            <div className='w-full flex flex-wrap items-start justify-between gap-5 md:gap-10'>
                <div className='w-full md:w-[30%] min-w-[270px]'>
                    <img src={logo} alt='footer-logo' />
                    <div className='bg-white mt-7 flex items-center gap-2 rounded p-1'>
                        <input type={'email'} className="outline-none border-none py-2 md:py-[10px] pl-3 md:pl-5 rounded flex-1" placeholder="Enter Email Address" />
                        <button className='bg-pink text-base font-medium rounded text-white py-2 md:py-[10px] px-2 md:px-5 lg:px-10'>Sign Up</button>
                    </div>
                    <p className='mt-4 md:mt-6 text-base text-gray-text'>Contact Info</p>
                    <p className='mt-[10px] text-base text-gray-text'>
                        17 Princess Road, London, Greater London NW1 8JR, UK
                    </p>
                </div>
                <div className='w-full md:w-[19%] min-w-[200px]'>
                    <h4 className='text-[22px] font-semibold font-josefin text-black'>Categories</h4>
                    <ul className='list-none mt-6 flex flex-col gap-y-4'>
                        <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Laptops & Computers</li>
                        <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Cameras & Photography</li>
                        <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Smart Phones & Tablets</li>
                        <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Video Games & Consoles</li>
                        <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Waterproof Headphones</li>
                    </ul>
                </div>
                <div className='w-full md:w-[19%] min-w-[200px]'>
                        <h4 className='text-[22px] font-semibold font-josefin text-black'>Customer Care</h4>
                        <ul className='list-none mt-6 flex flex-col gap-y-4'>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>My Account</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Discount</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Returns</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Order History</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Order Tracking</li>
                        </ul>
                </div>
                <div className='w-full md:w-[19%] min-w-[200px]'>
                        <h4 className='text-[22px] font-semibold font-josefin text-black'>Pages</h4>
                        <ul className='list-none mt-6 flex flex-col gap-y-4'>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Blog</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Browse the Shop</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Category</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Pre-Built Pages</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>Visual Composer Elements</li>
                            <li className='text-base font-normal text-gray-text cursor-pointer hover:translate-x-2 duration-300'>WooCommerce Pages</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
