import React from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Pages from './Pages/Pages'
import Home from './Pages/Home/Home'
import Man from './Pages/Man/Man'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
import Electronic from './Pages/Electronic/Electronic'
import ShopNow from './Pages/Home/ShopNow'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Pages />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<Man />} path='/man' />
        <Route element={<Kids />} path='/kids' />
        <Route element={<Women />} path='/women' />
        <Route element={<Electronic />} path='/electronic' />
        <Route element={<ShopNow />} path='/shopNow' />
      </Routes>
    </div>
  )
}

export default App