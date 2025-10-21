import React, { Component } from 'react'
import Global from './../Global';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {
    url=Global.apiDoctores;
    state={
        doctores:[],
        idDoctor:null
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
        // Limpiamos el idDoctor del state para que no se vean los detalles cunado cambias de hospital
        this.setState({
          idDoctor:null

        });
    }
    
}

  render() {
    return (
      <div>
        <h2 style={{color:"red"}}>
            Doctores {this.props.idHospital}
        </h2>
        <div
          className="table-responsive"
        >
          <table
            className="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">idDoctor</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Apellido</th>
                <th scope="col">salario</th>
                <th scope="col"></th>

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
                  <td>
                    {/* hacemos lambda para capturar idDoctor y guardarlo en el state */}
                    <button className="btn btn-info" onClick={() =>
                     this.setState({ 
                      idDoctor: doctor.idDoctor })}>Detalles</button>
                  </td>
                </tr>
                
              ))}
              
            </tbody>
          </table>
        </div>
        {
          this.state.idDoctor!==null &&

        <DetallesDoctor idDoctor={this.state.idDoctor} />
  }

      </div>
    )
  }
}
