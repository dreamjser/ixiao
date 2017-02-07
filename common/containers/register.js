import {
	connect
} from 'react-redux';
import Register from '../components/users/register';

import {
	fetchRegister,
} from '../actions/register';

import {
  fetchToken
} from '../actions/token';

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
