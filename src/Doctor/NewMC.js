import React, { Component } from 'react';

class NewMC extends Component {

    constructor(props) {

        super(props);
        this.state = {
            mc: {
                issuer: props.issuer,
                issuee: '',
                startDate: '',
                duration: 0,
                remark: ''
            }
        }
    }

    changeHandler = (event) => {
        let newMC = {...this.state.mc} 
        let val = event.target.value;
        let nam = event.target.name;
        newMC[nam] = val;
        this.setState(newMC);   
    }

    confirmHandler = () => {
        let payload = this.state.mc;

        if (payload.issue === '' || payload.startDate === ''){
            this.props.modal("Issuer and start date cannot be empty!")
        }else{
            fetch(BackendURL + '/newMC', {
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
                        this.props.modal("MC Submitted Successfully!")
                        
                        console.log("[MC Submitted] success");
                    })
                    .catch((e) => {
                        this.props.modal("MC Submitted Failed!")
                        //this.wrongCredHandler();
                        console.log(e)
                        console.log("[MC Submitted] failure" , e);
                    });
        }
    }


    render() {
        return (
            <div>
                <div className='EditInfo'>
                    <input placeholder={'PatientID'} onChange={(e) => this.changeHandler(e)} name={'issuer'}/>
                    <input placeholder={'Start Date'} onChange={(e) => this.changeHandler(e)} name={'startDate'}/>
                    <input placeholder={'Duration'} onChange={(e) => this.changeHandler(e)} name={'duration'}/>
                    <input placeholder={'Remark'} onChange={(e) => this.changeHandler(e)} name={'remark'}/>
                </div>
                <div className='EditInfo-btn' onClick={this.confirmHandler} >CONFIRM</div>
            </div>
        );
    }
}
