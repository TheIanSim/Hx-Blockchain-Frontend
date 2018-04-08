import React, { Component } from 'react';
import MCCard from '../Patient/MCCard';
import NewMC from './NewMC';


class MedicalCerts extends Component {

    state = {
        rawCerts: this.props.certs,
        issuer: this.getID(this.props.pd)
    }

    formatCerts = (cert) => {
        let certData = {
            ...cert
        }
        delete certData.$class;
        return <MCCard data={certData} key={certData.mcId}/>
    }

    getID = (pd) => {
        return //TODO
    }

    render() {
        return (
            <div>
                <h1>Medical Certificates</h1>
                <NewMC issuer={this.state.issuer} modal={this.props.modal}/>
                <div className='MedicalCerts-container'>
                    {this.state.rawCerts.map(this.formatCerts)}
                </div>
            </div>
        );
    }
  }

export default MedicalCerts;
