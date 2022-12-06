import React from 'react';
import Slider from 'react-slick';
import product_1 from "../../assets/categories_1.svg";
import product_2 from "../../assets/latest_3.svg";
import product_3 from "../../assets/trending_1.svg";
import product_4 from "../../assets/featured_4.svg";
import TopCategoriesCard from './TopCategoriesCard';

export default function TopCategories() {

    const featuredProducts = [
        { name:'Cantilever Chair 1', price: '40.00', myImage: product_1 },
        { name:'Cantilever Chair 2', price: '45.00', myImage: product_2 },
        { name:'Cantilever Chair 3', price: '43.00', myImage: product_3 },
        { name:'Cantilever Chair 4', price: '49.00', myImage: product_4 },
        { name:'Cantilever Chair 1', price: '40.00', myImage: product_1 },
        { name:'Cantilever Chair 2', price: '45.00', myImage: product_2 },
        { name:'Cantilever Chair 3', price: '43.00', myImage: product_3 },
        { name:'Cantilever Chair 4', price: '49.00', myImage: product_4 },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    
  return (
    <div className='w-full bg-white mt-10 md:mt-16 mb-10 overflow-hidden'>
        <div className='container items-center mx-auto h-auto'>
            <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>Top Categories</h3>
            <div className='block mx-auto w-full mt-2 top-categories-carousel'>
              <Slider {...settings} className="w-full mt-10 mb-14">
                { featuredProducts.map( (item, key) => <TopCategoriesCard item={item} key={key} /> ) }
              </Slider>
            </div>
        </div>
    </div>
  )
}
