import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { event } from 'jquery';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    cajaID=React.createRef();
    cajaNombre=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaCamas=React.createRef();
    url=Global.apiHospitales;
    insertHospital=(event)=>{
        event.preventDefault();
        var request="webresources/hospitales/post"
        var id=parseInt(this.cajaID.current.value);
        var camas=parseInt(this.cajaCamas.current.value);
        let hospital={
            idhospital:id,
            nombre:this.cajaNombre.current.value,
            direccion:this.cajaDireccion.current.value,
            telefono:this.cajaTelefono.current.value,
            camas:camas
        }
        axios.post(this.url+request,hospital).then(response=>{
            console.log("Hospital creado");
            console.log(response);
            this.setState({
                mensaje:"Hospital insertado:" + hospital.nombre,
                status:true
            })
        })
    }
    state={
        mensaje:"",
        status:false
    }
  render() {
    return (
      <div>
        {
          this.state.status== true &&
          <Navigate to="/hospitales" />
        }
        
        <h1>CreateHospital</h1>
        <form>
            <label>ID:</label>
            <input className='form-control' type="number" ref={this.cajaID} /><br/>
            <label>Nombre:</label>
            <input className='form-control' type="text" ref={this.cajaNombre} /><br/>
            <label>Dirección:</label>
            <input className='form-control' type="text" ref={this.cajaDireccion} /><br/>
            <label>Teléfono:</label>
            <input className='form-control' type="text" ref={this.cajaTelefono} /><br/>
            <label>Camas:</label>
            <input className='form-control' type="number" ref={this.cajaCamas} /><br/>
            <button className='btn btn-warning' type="button" onClick={this.insertHospital}>Crear Hospital</button>
        </form>
      </div>
    )
  }
}
