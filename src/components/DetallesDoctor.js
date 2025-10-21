import React, { Component } from 'react'
import Global from './../Global';
import axios from 'axios';
// Tendremos un nuevo component llamado DetallesDoctor que recibirá el ID del doctor 
// Dicho Component nos mostrará los detalles de un doctor 
// Debemos crear un botón, dentro del component Doctores para mostrar los detalles de un Doctor 
// Al pulsar el botón, dibujaremos dentro de Doctores el component DetallesDoctor 
export default class DetallesDoctor extends Component {
    url=Global.apiDoctores;

    state={
        doctor:null
    }
    findDoctor=()=>{
        let request="api/doctores/"+this.props.idDoctor;
        console.log(this.props.idDoctor);
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo doctores");
            this.setState({
                doctor:response.data
            })
    })
}
componentDidMount=()=>{
    this.findDoctor();
}
componentDidUpdate=(oldProps)=>{
    if(oldProps.idDoctor!==this.props.idDoctor){ 
        this.findDoctor();
    }
}
  render() {
    return (
      <div>
        { this.state.doctor &&
        (<table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">idDoctor</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Apellido</th>
                <th scope="col">salario</th>
                <th scope="col">Id hospital</th>
                
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>{this.state.doctor.idDoctor}</td>
                <td>{this.state.doctor.especialidad}</td>
                <td>{this.state.doctor.apellido}</td>
                <td>{this.state.doctor.salario}</td>
                <td>{this.state.doctor.idHospital}</td>
              </tr>

            </tbody>
          </table>)}
          
      </div>
    )
  }
}
               