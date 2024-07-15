import React from 'react'
import HomeScreen from '../homemodule/HomeScreen'
import ServiceScreen from '../ServiceModule'
import AboutMeScreen from '../aboutmodule'
import ResumeScreen from '../resumemodule'
import FooterComponent from '../../components/FooterComponent'
import CopyRightComponent from '../../components/CopyRightComponent'

const LandingScreen = () => {
  return (
    <div className='px-4'>
        <HomeScreen/>
        <AboutMeScreen/>
        <ServiceScreen/>
        <ResumeScreen/>
        <FooterComponent/>
        <CopyRightComponent/>
    </div>
  )
}

export default LandingScreen