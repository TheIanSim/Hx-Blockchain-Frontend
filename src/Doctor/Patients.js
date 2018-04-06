import React, { Component } from 'react';
import PatientCard from './PatientCard'


class Patient extends Component {
    state = {
        patients: this.props.data
    }

    render() {
      return (
        <div>
            <h1>Patients</h1>
            <div className='Patients-container'>
                {this.state.patients.map(i => <PatientCard data={i} key={i.ID}/>)}
            </div>
        </div>
      );
    }
  }

export default Patient;
