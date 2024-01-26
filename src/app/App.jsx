import React from 'react'
import NavigationBar from './Navigation'
import Footer from './Footer'
import Banner from '../components/banner'
import AboutUs from '../components/aboutus'
import ServicesOffered from '../components/services'
import Departments from '../components/departments'
import StaffProfiles from '../components/staff'
import Appointment from '../components/appointment'

const App = () => {
  return (
    <div>
        <Banner/>
        <AboutUs/>
        <ServicesOffered/>
        <Departments/>
        <StaffProfiles/>
        <Appointment/>
    </div>
  )
}

export default App