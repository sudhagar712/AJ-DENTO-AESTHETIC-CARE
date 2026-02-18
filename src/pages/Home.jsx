import React from 'react'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import ServicesCard from '../components/ServicesCard'
import TechnologyS from '../components/TechnologyS'
import Finalcontent from '../components/Finalcontent'
import Aboutus from '../components/Aboutus'
import OurValues from '../components/OurValues'

const Home = () => {
  return (
    <div>
      <Banner />
    
      <Aboutus />
      <OurValues />

      <ServicesCard />

      <TechnologyS />

  <Stats />
      <Testimonial />

      <Finalcontent />
    </div>
  )
}

export default Home
