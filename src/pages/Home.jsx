import React from 'react'
import LatestBlogs from '../components/common/LatestBlogs'
import Newsletter from '../components/common/Newsletter'
import ShopexOffer from '../components/common/ShopexOffer'
import DiscountItem from '../components/home/DiscountItem'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HeroHome from '../components/home/HeroHome'
import LatestProducts from '../components/home/LatestProducts'
import TopCategories from '../components/home/TopCategories'
import TrendingProducts from '../components/home/TrendingProducts'
import UniqueFeatures from '../components/home/UniqueFeatures'

export default function Home() {
  return (
    <>
      <HeroHome/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueFeatures/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <Newsletter/>
      <LatestBlogs/>
    </>
  )
}
