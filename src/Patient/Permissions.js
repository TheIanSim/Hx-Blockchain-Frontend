import React, { Component } from 'react';
import NameCard from './NameCard';
import InputComponent from './InputComponent'


class Permissions extends Component {
    state = {
        mc: [],
        pres: [],
        info: []
    }

    authNew = (ID,field) => {
        let curList = this.state[field];
        let newList = [ ...curList ];
        newList.push(ID);
        newState = {...this.state};
        newState[field] = newList;
        this.setState(newState);
    }

    render() {
      return (
        <div>
        <h1>Permissions</h1>
        <div className='Permissions-grid'>
            <div className='Perm-grid-item'>
                <h1>Medical Certificates</h1>
                <InputComponent update={authNew} type={"mc"} />
                {this.state.mc.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1>Prescriptions</h1>
                <InputComponent />
                {this.state.pres.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1>Medical Information</h1>
                <InputComponent />
            </div>

        </div>
    </div>
      );
    }
  }

export default Permissions;
