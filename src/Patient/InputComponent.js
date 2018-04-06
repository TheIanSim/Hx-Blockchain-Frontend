import React, { Component } from 'react';

class InputComponent extends Component {

    state = {
        inp: "Add ID"
    }

    changeHandler = (event) => {
        this.setState({
            inp: event.target.value
        })
    }

    submitHandler = () => {
        fetch(BackendURL + "/testPost", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: this.state.inp,
            credentials: 'include'}) 
            .then((response) => {
                console.log(response)
                return response.json();
            })
                .then((myJson) => {
                })
                .catch((e) => {
                });

        //if allowed
        authNew(this.state.inp, this.props.type)
    }

    render() {
      return (
        <div>
            <input type="text" onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>SUBMIT</button>
        </div>
      );
    }
  }

export default InputComponent;
