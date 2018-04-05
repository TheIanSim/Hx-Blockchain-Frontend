import React, { Component } from 'react';
import './App.css';
import Patient from './components/Patient';
import Login from './Login';
import BackendURL from './BackendURL';

class App extends Component {

  state = {
    auth: false,
    userInfo: null
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
                    return response.json();
                })
                    .then((myJson) => {
                        console.log(myJson);
                        this.setState({
                                      auth:true,
                                      userInfo:myJson
                                      });
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
        {this.state.auth? <Patient out={this.logoutHandler} data={this.state.userInfo}/> : <Login click={this.loginHandler}/>}
      </div>
    );
  }
}

export default App;
