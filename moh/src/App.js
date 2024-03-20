import React from 'react'
import SideBar from './SideBar'
import HealthHome from './HealthHome'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter,Route,Router, Routes} from "react-router-dom"
import MohHome from './MohHome'
import AddRecords from './AddRecords'
import EditDetail from './EditDetail'


const App = () => {

  return (
    
    <BrowserRouter>
    <Header/>
    <SideBar/>
    <Routes>
      <Route path='/' element={<MohHome/>}/>
      <Route path='/HealthHome' element={<HealthHome/>}/>
      <Route path='/AddRecords' element={<AddRecords/>}/>
      <Route path='/update' element={<EditDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App