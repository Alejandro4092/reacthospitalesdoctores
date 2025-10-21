import React, { Component } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'

export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
     <MenuHospitales />
     <Routes>
        <Route path='/' element={ <Home/> } />

     </Routes>
     
     </BrowserRouter>
    )
  }
}
