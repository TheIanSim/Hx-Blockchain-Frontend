import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Navigation from './Navigation';
import Permissions from './Permissions';
import Prescriptions from './Prescriptions';
import MedicalCert from './MedicalCert';

class Patient extends Component {

    state = {
        currentDash: <Permissions />,
        currentName: 'permissions'
    }

    changeDashHandler = (page,pageName) => {
        this.setState({
            currentDash: page,
            currentName: pageName
        })
    }

    routes = {
        permissions: <Permissions />,
        prescriptions: <Prescriptions />,
        medicalcert: <MedicalCert />
    }

  render() {

    const pd = {
        firstname: 'john',
        lastname:'doe',
        age:24,
        gender:'male',
        height:170,
        weight:60
    }

    return (
        <div className='Patient-grid'>

            <div className='Navigation'>
                <Navigation routes={this.routes} click={this.changeDashHandler} cur={this.state.currentName} out={this.props.out}/>
            </div>
            
            <div className='Dashboard'>
                {this.state.currentDash}
            </div>

            <div className='PersonalDetails'>
                <PersonalDetails details={pd} />
            </div>
        </div>
    );
  }
}

export default Patient;
