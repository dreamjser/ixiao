import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';

class App extends Component{
  render(){
    const pathname = this.props.location.pathname;
    return (
      <div className="ixiao">
        <div className="wrap">
          {this.props.children}
        </div>
        <Navbar pathname = {pathname} />
      </div>
    )
  }
}

export default App;
