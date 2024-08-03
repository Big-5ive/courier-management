import React from 'react'
import Hero from '../Hero/Hero'
import FirstSection from '../FirstSection/FirstSection'
import SecondSection from '../SecondSection/SecondSection'
import ThirdSection from '../ThirdSection/ThirdSection'
import ScrollToTop from '../../../Components/ScrollToTop'


const LandingPage = () => {
  return (
    <>
    <ScrollToTop />
    <Hero />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    </>
  )
}

export default LandingPage
