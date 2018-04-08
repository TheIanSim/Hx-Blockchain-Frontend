import React, { Component } from 'react';
import PersonalDetails from '../Common/PersonalDetails';
import Navigation from '../Common/Navigation';
import Permissions from './Permissions';
import Prescriptions from './Prescriptions';
import MedicalCert from './MedicalCert';
import MedicalRec from './MedicalRec'
import EditInfo from './EditInfo';

class Doctor extends Component {

    personalDet = this.props.data['personalDetails'][0];
    medicalCerts = this.props.data['medicalCerts'];
    medicalInfo = this.props.data['medicalInfo'];

    state = {
        currentDash: <div><h1>Welcome to HX Practitioner</h1><h1>Select an option to begin</h1></div>,
        currentName: null,
        pd: this.personalDet
    }

    changeDashHandler = (page,pageName) => {
        this.setState({
            currentDash: page,
            currentName: pageName
        })
    }

    updateInfoHandler = (newPd) => {
        this.setState( {
            ...this.state,
            pd: newPd
        });
    }

    toggleInfoHandler = () => {
        this.setState({
            currentDash: <EditInfo pd={this.state.pd} confirm={this.updateInfoHandler} modal={this.props.modal}/>,
            currentName: 'edit info'
        })
    }

    
    routes = [
        ['permissions', <Permissions pd={this.state.pd} modal={this.props.modal}/>],
        ['prescriptions', <Prescriptions />],
        ['medical certificates', <MedicalCert certs={this.medicalCerts} pd={this.state.pd} modal={this.props.modal}/>],
        ['medical records', <MedicalRec recs={this.medicalInfo} pd={this.state.pd} modal={this.props.modal}/>],
        ]
    
  render() {
    return (
        <div className='Patient-grid'>

            <div className='Navigation'>
                <Navigation routes={this.routes} click={this.changeDashHandler} cur={this.state.currentName} out={this.props.out}/>
            </div>
            
            <div className='Dashboard'>
                {this.state.currentDash}
            </div>

            <div className='PersonalDetails'>
                <PersonalDetails pd={this.state.pd} editInfo={this.toggleInfoHandler}/>
            </div>

        </div>
    );
  }
}

export default Doctor;
