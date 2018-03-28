import React, { Component } from 'react';
import MCCard from './MCCard'


class Prescriptions extends Component {
    state = {
        prescriptions: [{ 
            ID: 'sdfsd3',
            issuer_ID: 'd3fas',
            issuer_name: 'Dr. Wang',
            issue_date: '2018-01-01',
            duration: '1 days',
            remarks: 'Attend C'
            },
            { 
            ID: 'sdflk3',
            issuer_ID: 'sdgs3',
            issuer_name: 'Dr. House',
            issue_date: '2012-04-01',
            duration: '2 days',
            remarks: 'Light duty'
            },
            { 
            ID: 'sdfjo3',
            issuer_ID: 'vnok4',
            issuer_name: 'Dr. Watson',
            issue_date: '2016-04-01',
            duration: '20 days',
            remarks: 'Excuse sunlight'
            }
            ,
            { 
            ID: 'sdfjo3',
            issuer_ID: 'vnok4',
            issuer_name: 'Dr. Watson',
            issue_date: '2016-04-01',
            duration: '20 days',
            remarks: 'Excuse sunlight'
            }
            ,
            { 
            ID: 'sdfjo3',
            issuer_ID: 'vnok4',
            issuer_name: 'Dr. Watson',
            issue_date: '2016-04-01',
            duration: '20 days',
            remarks: 'Excuse sunlight'
            }]
    }

    render() {
      return (
        <div>
            <h1>Medical Certificates</h1>
            <div className='Prescription-container'>
                {this.state.prescriptions.map(i => <MCCard data={i} key={i.ID}/>)}
            </div>
        </div>
      );
    }
  }

export default Prescriptions;
