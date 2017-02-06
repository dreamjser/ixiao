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

  return errors;
}

const renderField = ({
	input,
	label,
	icon,
	type,
	meta: {
		touched,
		error
	}
}) => {
	const iconClass = `iconfont ${icon}`;
  const fail = touched && error;
  const success = touched && !error;

	return (
		<div className="users-box">
      <div className="users-item">
        <i className={iconClass}></i>
        <input {...input} placeholder={label} type={type}/>
        {success && (<i className="iconfont icon-selected"></i>)}
      </div>
      <p className="users-errors">
        {fail && (<span><i className="iconfont icon-warming"></i>{error}</span>)}
      </p>
    </div>
	)
}

class LoginForm extends Component {
	render() {
		const {
			handleSubmit
		} = this.props;
		return (
			<div className="users">
        <menu>
          <Link to="/login" className="active"><span>登录</span></Link>
          <Link to="/register"><span>注册</span></Link>
        </menu>
        <form className="users-form" onSubmit={handleSubmit}>
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
          <div className="users-submit">
            <button type="submit" className="btn">登录</button>
          </div>
        </form>
      </div>

		);
	}
}

export default reduxForm({
	form: 'login',
	validate
})(LoginForm);
