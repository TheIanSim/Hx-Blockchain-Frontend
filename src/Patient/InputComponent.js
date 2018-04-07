import React, { Component } from 'react';
import BackendURL from '../BackendURL';

class InputComponent extends Component {

    state = {
        inp: null,
        url: this.props.url,
        id: this.props.pd
    }

    changeHandler = (event) => {
        this.setState({
            inp: event.target.value
        })
    }

    formatReq = (input) => {

        return {
            'patient': this.state.id.detailsId,
            'accessor': input,
            'a': 'GRANT'
        }
    }

    submitHandler = () => {
        if (this.state.inp) {
            fetch(BackendURL + this.state.url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: this.formatReq(this.state.inp),
                credentials: 'include'}) 
                .then((response) => {
                    console.log(response.body)
                    return response.json();
                })
                    .then((myJson) => {
                        this.props.modal("Access to " + this.state.inp + " granted!")
                        //window.alert("Access to " + this.state.inp + " granted");
                    })
                    .catch((e) => {
                    });
        }else{
            this.props.modal("ID cannot be empty!")
        }
    }

    render() {
      return (
        <div className='inputComponent'>
            <input type="text" placeholder="Enter ID" onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>SUBMIT</button>
        </div>
      );
    }
  }

export default InputComponent;
