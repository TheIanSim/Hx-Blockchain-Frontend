import React, { Component } from 'react';
import PersonalDetails from '../Common/PersonalDetails';
import Navigation from '../Common/Navigation';
import Patient from './Patients';
import EditInfo from './EditInfo';

class Doctor extends Component {

    personalDet = JSON.parse(this.props.data['personalDetails'])[0];
    patientsData = this.props.data['patients'];

    state = {
        currentDash: <Patients data={this.patientsData}/>,
        currentName: 'patients',
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
            ['patients', <Patients data={this.patientsData}/>],
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
