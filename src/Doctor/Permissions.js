import React, { Component } from 'react';
import NameCard from './NameCard';


class Permissions extends Component {
    state = {
        mc: [],
        pres: [],
        info: []
    }

    render() {
      return (
        <div>
        <h1>Permissions</h1>
        <div className='Permissions-grid'>
            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0}}>Medical Certificates</h1>
                {this.state.mc.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0}}>Prescriptions</h1>
                {this.state.pres.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0}}>Medical Information</h1>
                {this.state.info.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

        </div>
    </div>
      );
    }
  }

export default Permissions;
