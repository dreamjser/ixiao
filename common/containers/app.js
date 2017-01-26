import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';

class App extends Component{
  render(){
    return (
      <div className="ixiao">
        <div className="wrap">
          {this.props.children}
        </div>
        <Navbar />
      </div>
    )
  }
}

export default App;
