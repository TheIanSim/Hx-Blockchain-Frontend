import React, { Component } from 'react';
import PrescriptionCard from './PrescriptionCard'


class Prescriptions extends Component {
    state = {
        prescriptions: [{ 
            ID: 'sdfsd3',
            issuer_ID: 'd3fas',
            issuer_name: 'Dr. Wang',
            issue_date: '2018-01-01',
            drug_name: 'paracetamol',
            quantity: '30ml',
            fulfilled: true,
            remarks: 'NIL'
            },
            { 
            ID: 'sdflk3',
            issuer_ID: 'sdgs3',
            issuer_name: 'Dr. House',
            issue_date: '2012-04-01',
            drug_name: 'trentinoin',
            quantity: '50ml',
            fulfilled: false,
            remarks: 'NIL'
            }]
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
