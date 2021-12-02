import React from 'react';
import '../../style/GlobleStyle.css'
import '../../style/style_component/login.css'

import {UserInput, Hello} from '../../components/MyComponent'

export default class Login extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="subContainer">
          <div className="form">
            <div className="header">
              <p className="headerTxt">LOGIN</p>
              <UserInput placeholder="Enter Username" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
