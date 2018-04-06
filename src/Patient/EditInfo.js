import React, { Component } from 'react';
import BackendURL from '../BackendURL';

class EditInfo extends Component {

    constructor(props) {
        super(props);
        
        if(this.props.pd){
            let initState = this.props.pd;

            delete initState.$class;
            delete initState.detailsId;
            delete initState.owner;
            delete initState.address;

            this.state = {
                initState,
                ...this.props.pd.address
            };
        }
        
    }

    changeHandler = (event) => {
        const newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(
            newState
        );
    }

    formatter = () => {
        return {...this.props.pd,
                ...this.state
               }
    }

    confirmHandler = () => {

        fetch(BackendURL + "/testPost", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formatter()),
                    credentials: 'include'}) 
    
                    .then((response) => {
                        
                        return response.json();
                    })
                        .then((myJson) => {
                            console.log("success");
                        })
                        .catch((e) => {
                            this.wrongCredHandler();
                            console.log("failure");
                        });
      }

    render() {

        let fields = [];
        Object.keys(this.state).forEach( (k) => {
            fields.push(
                    <div className='EditInfoItem' key={k}>
                        <h3>{k}</h3>
                        <input placeholder={this.state[k]} onChange={(e) => this.changeHandler(e)} name={k}/>
                    </div>
            );
        })


        return (
            <div>
                <h1>Edit Personal Details</h1>
                <div className='EditInfo'>
                   {fields}
                </div>
                <div className='EditInfo-btn' onClick={this.confirmHandler} >CONFIRM</div>
            </div>
        );
      }

}

export default EditInfo;
