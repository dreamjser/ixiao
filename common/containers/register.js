import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	connect
} from 'react-redux';
import Register from '../components/users/register';

import {
	fetchRegister,
} from '../actions/register';

// container
function mapStateToProps(state) {
	return {
		isFetching: state.register.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onRegister: values => dispatch(fetchRegister(values))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
