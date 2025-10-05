import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import HeroReversed from '../components/HeroReversed'
import FadeCarouselWithCaptions from '../components/FadeCarouselWithCaptions'
import VideoGallery from '../components/VideoGallery'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <FadeCarouselWithCaptions/>
      <HeroReversed/>
      <VideoGallery/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home
