import React from 'react';
import offer_img_1 from '../../assets/offer_delivery.svg';
import offer_img_2 from '../../assets/offer_cashback.svg';
import offer_img_3 from '../../assets/offer_premium.svg';
import offer_img_4 from '../../assets/offer_support.svg';

export default function ShopexOffer() {

    const shopexOffers = [
        { name: 'Free Delivery', offerImage: offer_img_1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
        { name: 'Cashbacks Offers', offerImage: offer_img_2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
        { name: 'Premium Offers', offerImage: offer_img_3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
        { name: '24/7 Support', offerImage: offer_img_4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    ]

  return (
    <div className='w-full bg-white mt-10 md:mt-16 mb-16 md:mb-28 h-auto'>
        <div className='container items-center mx-auto h-auto'>
            <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>What Shoppex Offer!</h3>
            <div className='flex flex-wrap gap-5 mt-10 w-full'>
                {
                    shopexOffers.map( (item, key) => 
                        <div className='flex flex-col items-center flex-1 min-w-[270px] bg-white shadow-style-1 px-5 py-10' key={key}>
                            <img className='mt-5' src={item.offerImage} alt={`offer-${key}`} />
                            <h4 className='text-[22px] font-bold font-josefin text-off-blue mt-7 mb-2'>{item.name}</h4>
                            <p className='text-base font-bold leading-6 text-dark-blue opacity-30 text-center'>{item.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
