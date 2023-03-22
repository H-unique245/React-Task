import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from '../components/Basket'
import Home from '../components/Home'

function AllRoutes() {
  return (
<Routes> 
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Basket />} />
    </Routes>
     )
}

export default AllRoutes
