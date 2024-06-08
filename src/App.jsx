import { useState } from 'react'
import './App.css'
import {Route, Routes,Link } from 'react-router-dom'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Menu from './pages/Menu'


function App() {
  

  return (
    <>
          




          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='Contact' element={<Contact/>} />
            <Route path='Menu' element={<Menu/>} />
          </Routes>
    </>
  )
}

export default App
