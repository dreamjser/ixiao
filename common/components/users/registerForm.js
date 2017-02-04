import React, { Component } from 'react';
import {Link} from 'react-router';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if(!values.email){
    errors.email = '请填写邮箱';
  }else if(!/^[\w-.]+@[\w-]+(.[a-zA-Z0-9]+)+$/.test(values.email)){
    errors.email = '邮箱格式错误';
  }

  if(!values.password){
    errors.password = '请填写密码';
  }

  if(!values.repassword){
    errors.repassword = '请填写密码';
  }else if(values.repassword !== values.password){
    errors.repassword = '密码不一致';
  }

  return errors;
}

const renderField = ({ input, label, icon, type, meta: { touched, error } }) => {
  const iconClass = `iconfont ${icon}`;
  return (
    <div className="users-box">
      <div className="users-item">
        <i className={iconClass}></i>
        <input {...input} placeholder={label} type={type}/>
      </div>
      <p className="users-errors">{touched && (error && <span>{error}</span>)}</p>
    </div>
  )
}

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="users">
        <menu>
          <Link to="/login"><span>登录</span></Link>
          <Link to="/register" className="active"><span>注册</span></Link>
        </menu>
        <form className="users-form" onSubmit={handleSubmit}>
          <Field name="email" type="text" label="*邮箱" icon="icon-mail" component={renderField} />
          <Field name="password" type="password" label="*密码" icon="icon-password" component={renderField} />
          <Field name="repassword" type="password" label="*确认密码" icon="icon-password" component={renderField} />
          <div className="users-submit">
            <button type="submit" className="btn">注册</button>
          </div>
        </form>
      </div>

    );
  }
}

export default reduxForm({
  form: 'login',
  validate
})(RegisterForm);
