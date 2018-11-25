import React, { Component } from 'react';
import './LoginFormPopUp.css';
import styled from 'styled-components';


class LoginFormPopUp extends Component {
  render() {
    return (
      <div>
        <a href="#openModal">Open Modal</a>
        <div id="openModal" className="modalDialog">
          <div>
            <a href="#close" title="Close" className="close">X</a>
            <form action={this.props.action}>
              <div className="imgcontainer">
                <img src={this.props.imgurl} alt="Login" class="avatar" />
              </div>
              <div className="container">
               
                <input type="text" className="login-component-input" placeholder="Enter Username" name="uname" required />
                <br/>
                <input type="password" className="login-component-input" placeholder="Enter Password" name="psw" required />
                <br />
                <button className="login-component-button" type="submit">Login</button>
              </div>
              <div class="container" >
                <span class="psw">Forgot <a href="#a">password?</a></span>
                <br /><br />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginFormPopUp;
