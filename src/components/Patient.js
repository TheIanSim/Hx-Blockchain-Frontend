import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Navigation from './Navigation';
import Permissions from './Permissions';
import Prescriptions from './Prescriptions';
import MedicalCert from './MedicalCert';
import MedicalRec from './MedicalRec'
import EditInfo from './EditInfo';


class Patient extends Component {

    state = {
        currentDash: <Permissions />,
        currentName: 'permissions',
        pd : {
            firstname: 'john',
            lastname:'doe',
            role: 'patient',
            info: {age:24,
                    gender:'male',
                    height:170,
                    weight:60}
            }
    }

    changeDashHandler = (page,pageName) => {
        this.setState({
            currentDash: page,
            currentName: pageName
        })
    }

    changeInfoHandler = () => {
        this.setState({
            currentDash: <EditInfo pd={this.state.pd}/>,
            currentName: 'edit info'
        })
    }

    routes = [
            ['permissions', <Permissions />],
            ['prescriptions', <Prescriptions />],
            ['medical certificates', <MedicalCert />],
            ['medical records', <MedicalRec />],
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
                <PersonalDetails pd={this.state.pd} editInfo={this.changeInfoHandler}/>
            </div>

        </div>
    );
  }
}

export default Patient;
