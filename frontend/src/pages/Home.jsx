import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import HeroReversed from '../components/HeroReversed'
import FadeCarouselWithCaptions from '../components/FadeCarouselWithCaptions'
import PhotoGallery from '../components/PhotoGallery'
import VideoGallery from '../components/VideoGallery'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <FadeCarouselWithCaptions/>
      <HeroReversed/>
      <VideoGallery/>
       <PhotoGallery/>
      <BestSeller/>
      <OurPolicy/>
      <Testimonials/>
    </div>
  )
}

export default Home
