import './style.scss';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './loginForm';

class Login extends Component {
	handleSubmit(values) {
		console.log(values);
	}
	render() {
		return (
			<LoginForm onSubmit={this.handleSubmit.bind(this)} />
		)
	}
}

export default Login;
