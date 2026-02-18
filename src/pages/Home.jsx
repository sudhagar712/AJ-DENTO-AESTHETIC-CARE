import React from 'react'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import ServicesCard from '../components/ServicesCard'
const Home = () => {
  return (
     <div>
    <Banner/>
    <ServicesCard/>
    <Stats/>
    <Testimonial/>
   
    </div>
  )
}

export default Home
