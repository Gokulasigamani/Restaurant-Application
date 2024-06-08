import { useState } from 'react'
import './App.css'
import {Route, Routes,Link } from 'react-router-dom'
import Index from './pages/Index'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
          




          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='Contact' element={<Contact/>} />
          </Routes>
    </>
  )
}

export default App
