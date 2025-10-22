import React, { Component } from 'react'
import { BrowserRouter, Routes,Route,useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'
import Doctores from './components/Doctores'
import CreateHospital from './components/CreateHospital'
import Hospitales from './components/Hospitales'

export default class Router extends Component {
  render() {
    //Funcion para pasar los props por URL
    function DoctoresElement() {
      let {idHospital}= useParams();
      return <Doctores idHospital={idHospital} />
    }
    return (
     <BrowserRouter>
     <MenuHospitales />
     <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/doctores/:idHospital' element={ <DoctoresElement/> } />
        <Route path='/create' element={ <CreateHospital/> } />
        <Route path='/hospitales' element={ <Hospitales/> } />

     </Routes>
     
     </BrowserRouter>
    )
  }
}
