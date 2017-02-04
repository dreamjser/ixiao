import './style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registerForm';

class Register extends Component{
  handleSubmit(values){
    console.log(values);
  }
  render(){
    return (
      <RegisterForm onSubmit={this.handleSubmit.bind(this)} />
    )
  }
}

export default Register;
