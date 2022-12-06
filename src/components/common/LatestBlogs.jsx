import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import blogImage1 from '../../assets/blog_1.svg';
import blogImage2 from '../../assets/blog_2.svg';
import blogImage3 from '../../assets/blog_3.svg';

export default function LatestBlogs() {

    const blogs = [
        { writer: 'KhaqanZamir', date: '21 August, 2023', title: 'Top essential Trends in 2021', blogImage: blogImage1, description: 'More off this less hello samlande lied much over tightly circa horse taped mightly'},
        { writer: 'KhaqanZamir', date: '05 January, 2022', title: 'Lates Collection in 2022', blogImage: blogImage2, description: 'More off this less hello samlande lied much over tightly circa horse taped mightly'},
        { writer: 'KhaqanZamir', date: '16 November, 2021', title: 'Top trending categories in 2021', blogImage: blogImage3, description: 'More off this less hello samlande lied much over tightly circa horse taped mightly'}
    ]

  return (
    <div className='w-full bg-white my-10 md:my-24 overflow-hidden'>
        <div className='container items-center mx-auto h-auto'>
            <h3 className='font-josefin font-bold text-2xl md:text-4xl text-center text-dark-blue'>Latest Blogs</h3>
            <div className='w-full mt-5 md:mt-10 flex flex-wrap items-center justify-center gap-5 md:gap-10 pb-7'>
                {
                    blogs.map((blog, index) => 
                        <div className='w-full md:w-[30%] min-w-[270px] rounded-t-lg shadow-style-1 cursor-pointer hover:scale-105 blog-card'>
                            <img className='w-[100%] rounded-lg' src={blog.blogImage} alt={`blog-${index}`} />
                            <div className='w-full p-5'>
                                <div className='w-full flex flex-wrap items-center justify-start gap-5'>
                                    <div className='flex items-center justify-start gap-2'>
                                        <FontAwesomeIcon className='text-pink' icon={faPenNib} />
                                        <span className='text-sm font-josefin text-dark-blue font-normal'>{blog.writer}</span>
                                    </div>
                                    <div className='flex items-center justify-start gap-2'>
                                        <FontAwesomeIcon className='text-[#FFA454]' icon={faCalendarDays} />
                                        <span className='text-sm font-josefin text-dark-blue font-normal'>{blog.date}</span>
                                    </div>
                                </div>
                                <h4 className='text-lg font-bold font-josefin text-off-blue mt-6'>{blog.title}</h4>
                                <p className='text-base leading-7 text-[#72718F] mt-4'>{blog.description}</p>
                                <a href='/' className='text-base leading-7 text-off-blue block mt-4 underline underline-offset-4'>Read More</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
