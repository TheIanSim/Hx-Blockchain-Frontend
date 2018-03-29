import React, { Component } from 'react';
import './App.css';
import logo from "./images/health.png";

class Login extends Component {

    componentDidMount() {
        fetch("http://172.25.101.177:9191/login?username=admin1&password=pp", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: 'admin1',
              password: 'pp',
            })
          })
          .then(
            (result) => {
                console.log('success');
                console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('error');
            }
          )
      }
        
    
  render() {
    return (
        <form className='LoginContainer'>

            <div className='LoginBox'>
            <img src={logo} alt="http://sweetclipart.com/multisite/sweetclipart/files/health_legal_caduceus_logo_lineart.png" className='nav-logo' />
            <h1>Hx Login</h1>
            <input className='LoginInput' type="text" placeholder="Username" name="uname" required />
            <br/>
            <input className='LoginInput' type="password" placeholder="Password" name="psw" required />
            <br/>
            <button className='LoginBtn' type="submit" onClick={this.props.click}>Enter</button>
            </div>

        </form>
    );
  }
}

export default Login;
