import React, { Component } from 'react';
import NameCard from './NameCard';


class Permissions extends Component {
    state = {
        mc: [{name:'ben', role:'doctor',ID:'fsd3'},{name:'anne', role:'nurse',ID:'ses5'}],
        pres: [{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'},{name:'anne', role:'nurse',ID:'ses5'}],
        info: []
    }

    render() {
      return (
        <div>
        <h1>Permissions</h1>
        <div className='Permissions-grid'>
            <div className='Perm-grid-item'>
                <h1>Medical Certificates</h1>
                {this.state.mc.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1>Prescriptions</h1>
                {this.state.pres.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1>Medical Information</h1>
            </div>

        </div>
    </div>
      );
    }
  }

export default Permissions;
