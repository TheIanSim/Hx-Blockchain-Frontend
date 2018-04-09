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
        let newState = {...this.state};
        newState[field] = newList;
        this.setState(newState);
    }

    render() {
      return (
        <div>
        <h1>Permissions</h1>
        <div className='Permissions-grid'>
            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0, fontWeight:400 , textTransform:'uppercase'}}>Medical Certificates</h1>
                <InputComponent update={this.authNew} url={"/mcAccess"} pd={this.props.pd} modal={this.props.modal} spinner={this.props.spinner}/>
                {this.state.mc.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0, fontWeight:400 , textTransform:'uppercase'}}>Prescriptions</h1>
                <InputComponent update={this.authNew} url={"/preAccess"} pd={this.props.pd} modal={this.props.modal} spinner={this.props.spinner}/>
                {this.state.pres.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

            <div className='Perm-grid-item'>
                <h1 style={{marginBottom:0, fontWeight:400 , textTransform:'uppercase'}}>Medical Information</h1>
                <InputComponent update={this.authNew} url={"/infoAccess"} pd={this.props.pd} modal={this.props.modal} spinner={this.props.spinner}/>
                {this.state.info.map(i => <NameCard name={i.name} role={i.role} key={i.ID}/>)}
            </div>

        </div>
    </div>
      );
    }
  }

export default Permissions;
