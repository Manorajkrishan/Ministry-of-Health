import React from 'react'
import SideBar from './SideBar'
import HealthHome from './HealthHome'
import Header from './Header'
import Footer from './Footer'


const App = () => {

  return (
    <div className='App'>
      <Header/>
      <SideBar/>
      <HealthHome/>
      <Footer/>
    </div>
  )
}

export default App