import React from 'react'
import Home from './Home'
import Cuision from './Cuision'
import {Route,Routes, useLocation,} from "react-router-dom"
import Recipe from './Recipe'
import Searched from './Searched'
import{AnimatePresence} from 'framer-motion'

function Pages() {
  const location = useLocation();
  return (
   <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname} >
      <Route path='/' element={<Home/>}/>
      <Route path='/Cuision/:type' element={<Cuision/>}/>
      <Route path='/Searched/:Search' element={<Searched/>}/>
      <Route path='/recipe/:name' element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
   
  )
}

export default Pages