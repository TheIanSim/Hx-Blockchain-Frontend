import React, { Component } from 'react';

class NewMC extends Component {

    constructor(props) {

        super(props);
        this.state = {
            rec: {
                issuer: props.issuer,
                issuee: '',
                date: '',
                diagnosis: '',
                testImages: '',
                labReports: '',
                drugAllergies: ''
            }
        }
    }

    changeHandler = (event) => {
        let newRec = {...this.state.rec} 
        let val = event.target.value;
        let nam = event.target.name;
        newRec[nam] = val;
        this.setState(newRec);   
    }

    confirmHandler = () => {
        let payload = {...this.state.rec};
        payload[testImages] = this.toList(this.state.rec.testImages);
        payload[labReports] = this.toList(this.state.rec.labReports);
        payload[drugAllergies] = this.toList(this.state.rec.drugAllergies);

        if (payload.issue === '' || payload.date === ''){
            this.props.modal("Issuer and date cannot be empty!")
        }else{
            fetch(BackendURL + '/newRec', {
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
                        this.props.modal("Record Submitted Successfully!")
                        
                        console.log("[Record Submitted] success");
                    })
                    .catch((e) => {
                        this.props.modal("Record Submitted Failed!")
                        //this.wrongCredHandler();
                        console.log(e)
                        console.log("[Record Submitted] failure" , e);
                    });
        }
    }

    toList = (str) => {
        try {
            return str.split(',');
        }catch {
            return [str];
        }

    }


    render() {
        return (
            <div>
                <div className='EditInfo'>
                    <input placeholder={'PatientID'} onChange={(e) => this.changeHandler(e)} name={'issuer'}/>
                    <input placeholder={'Date'} onChange={(e) => this.changeHandler(e)} name={'date'}/>
                    <input placeholder={'Diagnosis'} onChange={(e) => this.changeHandler(e)} name={'diagnosis'}/>
            
                    <input placeholder={'Test Images (seperate values by comma)'} onChange={(e) => this.changeHandler(e)} name={'testImages'}/>
                    <input placeholder={'Lab Reports (seperate values by comma)'} onChange={(e) => this.changeHandler(e)} name={'labReports'}/>
                    <input placeholder={'Drug Allergies (seperate values by comma)'} onChange={(e) => this.changeHandler(e)} name={'drugAllergies'}/>
                    
                </div>
                <div className='EditInfo-btn' onClick={this.confirmHandler} >CONFIRM</div>
            </div>
        );
    }
}
