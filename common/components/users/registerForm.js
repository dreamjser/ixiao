import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router';
import {
	Field,
	reduxForm
} from 'redux-form';
import {
	connect
} from 'react-redux';

import {
	fetchToken
} from '../../actions/token';

import {
	vEmail,
	vPassword
} from '../../constants/validation';

import Loading from '../../components/loading';

import checkEmailUnique from '../../api/checkEmailUnique';

// 验证邮箱和密码
const validate = values => {
	const errors = {};

	if (!values.email) {
		errors.email = vEmail.requiredMsg;
	} else if (!vEmail.match.test(values.email)) {
		errors.email = vEmail.matchMsg;
	}

	if (!values.password) {
		errors.password = vPassword.requiredMsg;
	} else if (!vPassword.match.test(values.password)) {
		errors.password = vPassword.matchMsg;
	}

	if (!values.repassword) {
		errors.repassword = '请确认密码';
	} else if (values.repassword !== values.password) {
		errors.repassword = '密码不一致';
	}

	return errors;
}

// 异步验证邮箱是否已注册
const asyncValidate = values => {
	return checkEmailUnique(values.email)
		.then(res => {
			if (res.data !== null) {
				throw {
					email: '邮箱已注册'
				}
			}
		})
}

const renderField = ({
	input,
	label,
	icon,
	type,
	meta: {
		touched,
		asyncValidating,
		error
	}
}) => {

	const iconClass = `iconfont ${icon}`;
	const fail = touched && error;
	const success = !asyncValidating && touched && !error;

	return (
		<div className="users-box">
      <div className="users-item">
        <i className={iconClass}></i>
        <input {...input} placeholder={label} type={type}/>
        {success && (<i className="iconfont icon-selected"></i>)}
        {asyncValidating && (<Loading circle="0.8rem" />)}
      </div>
      <p className="users-errors">
        {fail && (<span><i className="iconfont icon-warming"></i>{error}</span>)}
      </p>
    </div>
	)
}

class RegisterForm extends Component {
	componentDidMount() {
		this.props.getToken();
	}
	render() {
		const {
			handleSubmit,
			submiting
		} = this.props;

		return (
			<div className="users">
        <menu>
          <Link to="/login">
            <span>登录</span>
          </Link>
          <Link to="/register" className="active">
            <span>注册</span>
          </Link>
        </menu>
        <form className="users-form" onSubmit={handleSubmit}>
          <Field
            name="token"
            type="hidden"
            component="input"
          />
          <Field
            name="email"
            type="text"
            label="*邮箱"
            icon="icon-mail"
            component={renderField}
          />
          <Field
            name="password"
            type="password"
            label="*密码"
            icon="icon-password"
            component={renderField}
          />
          <Field
            name="repassword"
            type="password"
            label="*确认密码"
            icon="icon-password"
            component={renderField}
          />
          <div className="users-submit">
            <button type="submit" disabled={submiting} className="btn">
              {submiting? '注册中...': '注册'}
            </button>
          </div>
        </form>
      </div>
		);
	}
}

RegisterForm = reduxForm({
	form: 'register',
	validate,
	asyncValidate,
	asyncBlurFields: ['email']
})(RegisterForm);


// container
function mapStateToProps(state) {
	return {
		initialValues: state.token.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getToken: () => dispatch(fetchToken())
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterForm);
