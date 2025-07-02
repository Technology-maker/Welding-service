import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import GateService from './components/servicepage/GateService';
import Roofing from './components/servicepage/Roofing';
import Grillsservice from './components/servicepage/Grillsservice';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gateservice" element={<GateService />} />
      <Route path="/roofingservice" element={<Roofing />} />
      <Route path="/grillservice" element={<Grillsservice />} />


      <Route path="*" element={<h1 className='text-slate-800, font-serif, font-bold'>404 - Page Not Found Go Back and Try Again !  </h1>} />
    </Routes>
  )
}

export default App;