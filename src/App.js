import React, { Component } from 'react';
import './App.css';
import Patient from './components/Patient';
import Login from './Login';

class App extends Component {

  state = {
    auth: false
  }

  loginHandler = () => {
    this.setState({auth:true})
  }

  logoutHandler = () => {
    this.setState({auth:false})
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
