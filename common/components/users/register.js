import './style.scss';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registerForm';

class Register extends Component {
	handleSubmit(onRegister, values) {
		onRegister(values)
			.then(res => {
				const {
					data
				} = res;

        if(data.code === 0){
          alert(111);
        }else if(data.code === 11000){
          alert('邮箱已注册！');
        }
			});
	}
	render() {
		const {
			onRegister,
			isFetching
		} = this.props;
		return (
			<RegisterForm submiting={isFetching} onSubmit={this.handleSubmit.bind(this, onRegister)} />
		)
	}
}

export default Register;
