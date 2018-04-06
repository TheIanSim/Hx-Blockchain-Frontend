import React, { Component } from 'react';
import './App.css';
import Patient from './Patient/Patient';
import Doctor from './Doctor/Doctor';
import Login from './Login';
import BackendURL from './BackendURL';

class App extends Component {

  state = {
    userInfo: null,
    display: <Login click={this.loginHandler}/>
  }

  loginHandler = (cred) => {

    const username = cred.username;
    const password = cred.password;

    fetch(BackendURL + "/login?username=" + username + "&password=" + password + "&submit=Login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include'}) 

                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                    .then((myJson) => {
                      console.log(myJson);
                      
                      let role = myJson['role']; //get role
                      
                        if(role === 'Patient'){ 
                          this.setState({
                            ...this.state,
                            display: <Patient out={this.logoutHandler} data={this.state.userInfo}/>
                          })};

                        if(role === 'Doctor'){ 
                          this.setState({
                            ...this.state,
                            display: <Doctor out={this.logoutHandler} data={this.state.userInfo}/>
                          })};

                        if(role === 'Hospital'){ 
                          this.setState({
                            ...this.state,
                            display: <Hospital out={this.logoutHandler} data={this.state.userInfo}/>
                          })};
                         
                    })
                    .catch((e) => {
                        this.wrongCredHandler();
                        console.log(e);
                    });
  }

  logoutHandler = () => {
    this.setState({auth:false})
  }

  wrongCredHandler = () => {
    window.alert("Invalid Username or Password")
  }

  render() {
    return (
      <div className="App">
        {this.state.display}
      </div>
    );
  }
}

export default App;
