import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';

class App extends Component{
  render(){
    return (
      <div className="ixiao-app">
        {this.props.children}
        <Navbar />
      </div>
    )
  }
}

export default App;
