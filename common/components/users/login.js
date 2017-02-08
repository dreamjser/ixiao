import './style.scss';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './loginForm';

class Login extends Component {
	handleSubmit(onLogin, values) {
		onLogin(values)
      .then(res => {
        const data = res.data;

        if(data.code === 0){
          if(data.data !== null){
            alert('登录成功');
          }else{
            alert('用户名或密码错误');
          }
        }else{
          alert(data.msg);
        }
      });
	}
	render() {
    const {
      isFetching,
      onLogin
    } = this.props;

		return (
			<LoginForm submiting={isFetching} onSubmit={this.handleSubmit.bind(this, onLogin)} />
		)
	}
}

export default Login;
