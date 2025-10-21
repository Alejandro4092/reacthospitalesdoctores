import React, { Component } from 'react'
import Global from './../Global';
import axios from 'axios';

export default class Doctores extends Component {
    url=Global.apiDoctores;
    state={
        doctores:[]
    }
    loadDoctores=()=>{
        let request="api/Doctores/doctoreshospital/"+this.props.idHospital;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo doctores");
            this.setState({
                doctores:response.data
            })
    })
}
componentDidMount=()=>{
    this.loadDoctores();
}
componentDidUpdate=(oldProps)=>{
    if(oldProps.idHospital!==this.props.idHospital){
        this.loadDoctores();
    }
}

  render() {
    return (
      <div>
        <h2 style={{color:"red"}}>
            Doctores {this.props.idHospital}
        </h2>
        <div
          class="table-responsive"
        >
          <table
            class="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">idDoctor</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Apellido</th>
                <th scope="col">salario</th>
              </tr>
            </thead>
            <tbody>
              {
              this.state.doctores.map((doctor,index) => (
                <tr key={index}>
                  <td>{doctor.idDoctor}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.salario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
       
        
      </div>
    )
  }
}
