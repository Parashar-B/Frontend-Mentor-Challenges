import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div className='font-nunitoSans'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/country-details'} element={<CountryDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
