import React from 'react'
import BannerOffer from '../../components/BannerOffer/BannerOffer'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'

// type Props = {}

const HomePage = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <BannerOffer></BannerOffer>
      <Products></Products>
    </div>
  )
}

export default HomePage