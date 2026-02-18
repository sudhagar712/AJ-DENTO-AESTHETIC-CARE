import React from 'react'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import ServicesCard from '../components/ServicesCard'
import TechnologyS from '../components/TechnologyS'
import Finalcontent from '../components/Finalcontent'
const Home = () => {
  return (
     <div>
    <Banner/>
    <ServicesCard/>
    <TechnologyS/>
       
    <Stats/>
     <Testimonial/>

   <Finalcontent/>
    </div>
  )
}

export default Home
