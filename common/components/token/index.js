import React, {
  Component
} from 'react';

class Token extends Component{
  componentWillMount(){
    this.props.getToken();
  }
  render(){
    const {name, data} = this.props;

    return (
      <span>
        {
          data &&
          <input type="hidden" name={name} value={data.token} />
        }
      </span>

    );
  }
}

export default Token;
