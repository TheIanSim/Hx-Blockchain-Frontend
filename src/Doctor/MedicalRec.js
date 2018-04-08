import React, { Component } from 'react';
import RecordCard from '../Patient/RecordCard';
import NewRecord from './NewRecord';


class MedicalRec extends Component {

    state = {
        rawCerts: this.props.certs,
        issuer: this.getID(this.props.pd)
    }

    formatRec = (rec) => {
        let recData = {
            ...rec
        }
        delete recData.$class;
        return <RecordCard data={recData} key={recData.recId}/>
    }

    getID = (pd) => {
        return //TODO
    }

    render() {
        return (
            <div>
                <h1>Medical Records</h1>
                <NewRecord issuer={this.state.issuer} modal={this.props.modal}/>
                <div className='MedicalCerts-container'>
                    {this.state.rawCerts.map(this.formatRec)}
                </div>
            </div>
        );
    }
  }

export default MedicalRec;
