import React from 'react';

export default function Newsletter() {
  return (
    <div className='bg-newsletter w-full h-auto min-h-[460px] flex object-cover bg-cover bg-no-repeat bg-center'>
        <div className='container w-full m-auto h-auto'>
            <h4 className='w-[60%] mx-auto text-2xl md:text-[35px] font-bold font-josefin text-center text-dark-blue tracking-widest leading-relaxed'>Get Latest Update by Subscribing Our Newsletter</h4>
            <button className='block text-lg mt-5 mx-auto font-josefin bg-pink text-white py-2 md:py-4 px-4 md:px-8'>Subscribe Now</button>
        </div>
    </div>
  )
}
