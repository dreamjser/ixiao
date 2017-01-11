import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from 'components/counter';

class CounterPage extends Component{
  render(){
    return (
      <div>
        this is CounterPage page
        <Counter/>
      </div>
    )
  }
}

export default CounterPage;
