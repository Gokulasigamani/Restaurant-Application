import { useState } from 'react'
import './App.css'
import {Route, Routes,Link } from 'react-router-dom'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Table from './pages/Table'
import Success from './pages/Success'

function App() {
  
  const [details,setDetails]=useState(null);

  return (
    <>
          




          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='Contact' element={<Contact/>} />
           <Route path='/menu' element={<Menu/>}/>
           <Route path='/table' element={<Table setDetails={setDetails}/>}  />
           <Route path='/success' element={<Success details={details}/>}  />


          </Routes>
    </>
  )
}

export default App
