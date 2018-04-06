import React, { Component } from 'react';
import MCCard from './MCCard'


class MedicalCerts extends Component {

    rawCerts = this.props.certs;

    state = {
        certs: [{ 
            ID: 'sdfsd3',
            issuer_ID: 'd3fas',
            issuer_name: 'Dr. Wang',
            issue_date: '2018-01-01',
            duration: '1 days',
            remarks: 'Attend C'
            }]
    }

    render() {
      return (
        <div>
            <h1>Medical Certificates</h1>
            <div className='Prescription-container'>
                {this.state.certs.map(i => <MCCard data={i} key={i.ID}/>)}
            </div>
        </div>
      );
    }
  }

export default MedicalCerts;
