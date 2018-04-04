import React, { Component } from 'react';
import './App.css';
import Patient from './components/Patient';
import Login from './Login';

class App extends Component {

  state = {
    auth: false
  }

  loginHandler = (cred) => {

    const username = cred.username;
    const password = cred.password;

    fetch("http://localhost:9191/login?username=" + username + "&password=" + password + "&submit=Login", {
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
                        console.log(myJson)
                        this.setState({auth:true});
                    })
                    .catch(() => {
                        this.wrongCredHandler();
                        console.log('err');
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
        {this.state.auth? <Patient out={this.logoutHandler}/> : <Login click={this.loginHandler}/>}
      </div>
    );
  }
}

export default App;
