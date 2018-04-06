import React, { Component } from 'react';
import PersonalDetails from '../Common/PersonalDetails';
import Navigation from '../Common/Navigation';
import Permissions from './Permissions';
import Prescriptions from './Prescriptions';
import MedicalCert from './MedicalCert';
import MedicalRec from './MedicalRec'
import EditInfo from './EditInfo';

class Patient extends Component {

    personalDet = JSON.parse(this.props.data['personalDetails'])[0];
    medicalCerts = this.props.data['medicalCerts'];
    medicalInfo = this.props.data['medicalInfo'];

    state = {
        currentDash: <Permissions />,
        currentName: 'permissions',
        pd: this.personalDet
    }

    changeDashHandler = (page,pageName) => {
        this.setState({
            currentDash: page,
            currentName: pageName
        })
    }

    toggleInfoHandler = () => {
        this.setState({
            currentDash: <EditInfo pd={this.state.pd}/>,
            currentName: 'edit info'
        })
    }



    routes = [
            ['permissions', <Permissions />],
            ['prescriptions', <Prescriptions />],
            ['medical certificates', <MedicalCert certs={this.medicalCerts}/>],
            ['medical records', <MedicalRec recs={this.medicalInfo}/>],
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

export default Patient;
