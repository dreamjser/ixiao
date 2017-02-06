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
	emailValidation,
	passwordValidation
} from '../../constants/validation';
import Token from '../../containers/token';
import Loading from '../../components/loading';
import checkEmailUnique from '../../api/checkEmailUnique';

// 验证邮箱和密码
const validate = values => {
	const errors = {};

	if (!values.email) {
		errors.email = emailValidation.requiredMsg;
	} else if (!emailValidation.match.test(values.email)) {
		errors.email = emailValidation.matchMsg;
	}

	if (!values.password) {
		errors.password = passwordValidation.requiredMsg;
	} else if (!passwordValidation.match.test(values.password)) {
		errors.password = passwordValidation.matchMsg;
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
          <Token name="token" />
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

export default reduxForm({
	form: 'register',
	validate,
	asyncValidate,
	asyncBlurFields: ['email']
})(RegisterForm);
