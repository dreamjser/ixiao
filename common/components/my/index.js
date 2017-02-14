import React, {
  Component
} from 'react';

class My extends Component{
  componentWillMount(){
    this.props.getUserInfo();
  }

  render(){
    const {
      data,
      isFetching
    } = this.props;

    return (
      <div className="my">
        个人中心页
      </div>
    )

  }
}

export default My;
