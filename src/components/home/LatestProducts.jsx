import React, { useState } from 'react';
import LatestCard from './LatestCard';
import latest_1 from '../../assets/latest_1.svg';
import latest_2 from '../../assets/trending_2.svg';
import latest_3 from '../../assets/latest_3.svg';
import latest_4 from '../../assets/latest_4.svg';
import latest_5 from '../../assets/latest_5.svg';
import latest_6 from '../../assets/latest_6.svg';
import best_1 from '../../assets/best_1.svg';
import best_2 from '../../assets/best_2.svg';
import best_3 from '../../assets/best_3.svg';
import best_4 from '../../assets/best_4.svg';
import best_5 from '../../assets/headphone_1.svg';
import best_6 from '../../assets/headphone_2.svg';

export default function LatestProducts() {

    const [activeTab, setActiveTab] = useState(1);

    const newArrival = [
        { newPrice: "42.00", oldPrice: '56.00', productImage: latest_1, name: "Comfort Handy", },
        { newPrice: "45.00", oldPrice: '59.00', productImage: latest_2, name: "Comfort Handy Craft" },
        { newPrice: "40.00", oldPrice: '54.00', productImage: latest_3, name: "Comfort Craft" },
        { newPrice: "49.00", oldPrice: '63.00', productImage: latest_4, name: "Handy Craft" },
        { newPrice: "41.00", oldPrice: '55.00', productImage: latest_5, name: "Soft Craft" },
        { newPrice: "48.00", oldPrice: '62.00', productImage: latest_6, name: "Soft Handy Craft" },
    ]

    const bestSeller = [
        { newPrice: "52.00", oldPrice: '66.00', productImage: best_1, name: "Comfort Chair", },
        { newPrice: "55.00", oldPrice: '69.00', productImage: best_2, name: "Chair Crafted" },
        { newPrice: "50.00", oldPrice: '64.00', productImage: best_3, name: "Soft Craft" },
        { newPrice: "59.00", oldPrice: '73.00', productImage: best_4, name: "Handy Craft" },
        { newPrice: "51.00", oldPrice: '65.00', productImage: best_5, name: "Beats Headphones" },
        { newPrice: "58.00", oldPrice: '72.00', productImage: best_6, name: "Phillips Headphones" },
    ]

  return (
    <div className='w-full bg-white mt-16 md:mt-32 mb-10 overflow-hidden'>
        <div className='container items-center mx-auto h-auto'>
            <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>Latest Products</h3>
            <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 w-full mt-5'>
                <span className={`font-lato text-lg font-normal cursor-pointer underline-offset-4 ${activeTab === 1 ? 'underline text-pink' : 'text-off-blue'}`}
                    onClick={() => setActiveTab(1)}>
                    New Arrival
                </span>
                <span className={`font-lato text-lg font-normal cursor-pointer underline-offset-4 ${activeTab === 2 ? 'underline text-pink' : 'text-off-blue'}`}
                    onClick={() => setActiveTab(2)}>
                    Best Seller
                </span>
                <span className={`font-lato text-lg font-normal cursor-pointer underline-offset-4 ${activeTab === 3 ? 'underline text-pink' : 'text-off-blue'}`}
                    onClick={() => setActiveTab(3)}>
                    Featured
                </span>
                <span className={`font-lato text-lg font-normal cursor-pointer underline-offset-4 ${activeTab === 4 ? 'underline text-pink' : 'text-off-blue'}`}
                    onClick={() => setActiveTab(4)}>
                    Special Offer
                </span>
            </div>
            <div className='w-full flex flex-wrap gap-9 mt-10'>
                { activeTab === 1 || activeTab === 3 ? 
                    newArrival.map( (item, key) => <LatestCard item={item} key={key} /> ) :
                  activeTab === 2 || activeTab === 4 ? 
                    bestSeller.map( (item, key) => <LatestCard item={item} key={key} /> ) : ''
                }
            </div>
        </div>
    </div>
  )
}
