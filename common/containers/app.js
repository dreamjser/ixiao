import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/layouts/navbar';
import {Button} from 'antd-mobile';

class App extends Component{
  render(){
    const pathname = this.props.location.pathname;
    return (
      <div className="ixiao">
        <Button type="primary"> 1111 </Button>
        <div className="wrap">
          {this.props.children}
        </div>
        <Navbar pathname = {pathname} />
      </div>
    )
  }
}

export default App;
