import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';

class HomePage extends Component{
  render(){
    return (
      <div>
        this is HomePage222
        {this.props.children}
        <Navbar/>
      </div>
    )
  }
}

export default HomePage;
