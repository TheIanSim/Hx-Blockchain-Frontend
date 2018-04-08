import React, { Component } from 'react';
import PrescriptionCard from './PrescriptionCard'


class Prescriptions extends Component {
    state = {
        prescriptions: []
    }

    render() {
      return (
        <div>
            <h1>Prescriptions</h1>
            <div className='Prescription-container'>
                {this.state.prescriptions.map(i => <PrescriptionCard data={i} key={i.ID}/>)}
            </div>
        </div>
      );
    }
  }

export default Prescriptions;
