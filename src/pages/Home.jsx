import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HeroHome from '../components/home/HeroHome'
import LatestProducts from '../components/home/LatestProducts'

export default function Home() {
  return (
    <>
      <HeroHome/>
      <FeaturedProducts/>
      <LatestProducts/>
    </>
  )
}
