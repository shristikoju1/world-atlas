import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
   <main className='hero-section main'>
    <div className='container grid grid-two-cols'>
      <div className='hero-content'>
        <h1 className='heading-xl'>Explore the World with WorldAtlas</h1>
        <p className='paragraph'> Discover countries, cultures, and breathtaking landmarks from around the globe. Plan your next adventure, learn fascinating facts, and dive into the beauty of our world—all in one place.</p>
        <button className='btn btn-darken btn-inline bg-white-box'>Start Exploring <FaLongArrowAltRight /></button>
      </div>
      <div className='hero-img'>
        <img src="/images/hero_image.png" alt="world is beauty" className='banner-image' />
      </div>
    </div>
   </main>
  )
}

export default Home
