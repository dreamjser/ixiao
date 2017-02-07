import './style.scss';

import React, {
	Component
} from 'react';
import {
	browserHistory
} from 'react-router';
import RegisterForm from './registerForm';
import timeout from '../../api/timeout';

class Register extends Component {
	handleSubmit(onRegister, values) {
		onRegister(values)
			.then(res => {
				const data = res.data;

				if (data.code === 0) {
          alert('注册成功');
          timeout(1000)
            .then(() => browserHistory.push('/login'));
				} else if (data.code === 11000) {
					alert('邮箱已注册！');
				} else {
					alert(data.msg);
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
