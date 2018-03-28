import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  render() {
    return (
        <form className='LoginContainer'>

            <div className='LoginBox'>
            <img src="http://sweetclipart.com/multisite/sweetclipart/files/health_legal_caduceus_logo_lineart.png" className='nav-logo' />
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
