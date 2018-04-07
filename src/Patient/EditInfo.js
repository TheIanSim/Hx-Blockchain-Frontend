import React, { Component } from 'react';
import BackendURL from '../BackendURL';

class EditInfo extends Component {

    constructor(props) {
        super(props);
        
        if(this.props.pd){
            let initState = {...this.props.pd};

            delete initState.$class;
            delete initState.detailsId;
            delete initState.owner;
            delete initState.address;

            let NewState = {
                ...initState,
                ...props.pd.address
            };

            delete NewState.$class;
            this.state = NewState;
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
        let outState = {...this.props.pd,
                        ...this.state};
        
        outState.address.country = this.state.country;
        outState.address.postcode = this.state.postcode;
        outState.address.street = this.state.street;

        delete outState.country;
        delete outState.postcode;
        delete outState.street;

        return outState
    }


    confirmHandler = () => {
        let payload = this.formatter();
        fetch(BackendURL + "/updatePersonalInfo2", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },                    
                    body: JSON.stringify(payload),
                    credentials: 'include'}) 
                    .then((response) => {              
                        return response.json();
                    })
                        .then((myJson) => {
                            this.props.confirm(payload);
                            this.props.modal("Updated Info Successfully!")
                            
                            console.log("[Update Info] success");
                        })
                        .catch((e) => {
                            this.props.modal("Update Info Failed!")
                            //this.wrongCredHandler();
                            console.log(e)
                            console.log("[Update Info] failure" , e);
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
