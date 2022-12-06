import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import itemOne from '../../assets/discounted_sofa.svg';

export default function DiscountItem() {

    const [activeTab, setActiveTab] = useState(1);
    const contentTab = activeTab - 1;

    const discountItems = [
        { name: 'Plastic Chair Compact', discountRate: '20%', attributeOne: 'Material expose like metals', attributeTwo: 'Clear lines and geomatric figures', attributeThree: 'Simple neutral colours', attributeFour: 'Material expose like metals', mediaUrl: itemOne },
        { name: 'Wood Chair Compact', discountRate: '30%', attributeOne: 'Material expose like metals', attributeTwo: 'Clear lines and geomatric figures', attributeThree: 'Simple neutral colours', attributeFour: 'Material expose like metals', mediaUrl: itemOne },
        { name: 'Eams Sofa Compact', discountRate: '15%', attributeOne: 'Material expose like metals', attributeTwo: 'Clear lines and geomatric figures', attributeThree: 'Simple neutral colours', attributeFour: 'Material expose like metals', mediaUrl: itemOne },
    ]

  return (
    <div className='w-full bg-white mt-10 md:mt-16 mb-10 overflow-hidden'>
      <div className='container items-center mx-auto h-auto'>
        <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>Discount Item</h3>

        <ul className='mt-8 list-none flex flex-wrap items-center justify-center gap-5'>
            <li className={`flex items-center gap-2 text-lg font-normal cursor-pointer ${activeTab === 1 ? 'underline underline-offset-4 text-pink' : ''}`}
                onClick={() => setActiveTab(1)}>
                Wood Chair {activeTab ===1 ? <span className='w-[5px] h-[5px] rounded-full bg-pink'></span> : ''}
            </li>
            <li className={`flex items-center gap-2 text-lg font-normal cursor-pointer ${activeTab === 2 ? 'underline underline-offset-4 text-pink' : ''}`}
                onClick={() => setActiveTab(2)}>
                Plastic Chair {activeTab ===2 ? <span className='w-[5px] h-[5px] rounded-full bg-pink'></span> : ''}
            </li>
            <li className={`flex items-center gap-2 text-lg font-normal cursor-pointer ${activeTab === 3 ? 'underline underline-offset-4 text-pink' : ''}`}
                onClick={() => setActiveTab(3)}>
                Sofa Collection {activeTab ===3 ? <span className='w-[5px] h-[5px] rounded-full bg-pink'></span> : ''}
            </li>
        </ul>

        {
            discountItems.filter( (item, i) => i === contentTab ).map(item => 
                <div className='mt-5 flex flex-col xl:flex-row items-center justify-center gap-10'>
                    <div className='flex-1'>
                        <h4 className='capitalize font-bold font-josefin text-2xl md:text-4xl text-dark-blue'>{item.discountRate} Discount of all Products</h4>
                        <p className='mt-4 text-pink text-xl font-josefin leading-snug tracking-[1.5%]'>{item.name}</p>
                        <p className='mt-5 text-lg text-dark-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <div className='flex flex-wrap items-center justify-between gap-3 mt-5'>
                            <span className='flex items-center gap-2 text-dark-gray w-full md:w-[48%]'><FontAwesomeIcon className='text-purple' icon={faCheck}/>{item.attributeOne}</span>
                            <span className='flex items-center gap-2 text-dark-gray w-full md:w-[48%]'><FontAwesomeIcon className='text-purple' icon={faCheck}/>{item.attributeTwo}</span>
                            <span className='flex items-center gap-2 text-dark-gray w-full md:w-[48%]'><FontAwesomeIcon className='text-purple' icon={faCheck}/>{item.attributeThree}</span>
                            <span className='flex items-center gap-2 text-dark-gray w-full md:w-[48%]'><FontAwesomeIcon className='text-purple' icon={faCheck}/>{item.attributeFour}</span>
                        </div>
                        <button className='mt-8 bg-pink text-white py-2 px-5 md:py-5 md:px-12 text-[17px] font-josefin tracking-[2%]'>Shop Now</button>
                    </div>
                    <div className='flex items-center justify-center w-full md:w-[50%] relative h-auto'>
                        <span className='absolute w-[70%] z-[0] aspect-[4/4] mx-auto translate-y-[4%] bg-[#FCECF1] rounded-full'></span>
                        <img className='z-[1] w-full' src={item.mediaUrl} alt={`item`} />
                    </div>
                </div> 
            )
        }
        
      </div>
    </div>
  )
}
