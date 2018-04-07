import React, { Component } from 'react';
import './App.css';
import Patient from './Patient/Patient';
import Doctor from './Doctor/Doctor';
import Login from './Login';
import BackendURL from './BackendURL';
import Modal from './Common/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      display: <Login click={this.loginHandler}/>,
      modal: null
    }
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
                    //console.log(response);
                    return response.json();
                })
                    .then((myJson) => {
                                  
                      let role = myJson['role']; //get role
                      
                        if(role === 'ADMIN'){ 
                          this.setState({
                            ...this.state,
                            display: <Patient out={this.logoutHandler} data={myJson} modal={this.showModal}/>
                          })};

                        if(role === 'Doctor'){ 
                          this.setState({
                            ...this.state,
                            display: <Doctor out={this.logoutHandler} data={this.state.userInfo}/>
                          })};

                    })
                    .catch((e) => {
                        this.wrongCredHandler();
                        console.log(e);
                    });
  }

  logoutHandler = () => {
    this.setState({
      userInfo: null,
      display: <Login click={this.loginHandler}/>
    })
  }

  wrongCredHandler = () => {
    this.showModal('invalid username or password');
  }

  showModal = (message) => {
    this.setState({
      ...this.state,
      modal: <Modal msg={message} close={this.closeModal}/>
    })
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      modal: null
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.modal}
        {this.state.display}
      </div>
    );
  }
}

export default App;
