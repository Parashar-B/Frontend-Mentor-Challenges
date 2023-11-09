import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

export const RootContext = createContext();

function App() {

  const [selectedCountry, setSelectedCountry ] = useState(null)
  const [showCountryDetails, setShowCountryDetails] = useState(false)
  
  return (
    <div className='font-nunitoSans'>
      <RootContext.Provider value={{selectedCountry, setSelectedCountry, showCountryDetails, setShowCountryDetails}}>
        <NavBar/>
        <Home/>
      </RootContext.Provider>
    </div>
  )
}

export default App
