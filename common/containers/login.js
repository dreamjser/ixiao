import {
  connect
} from 'react-redux';
import Register from '../components/users/login';

import {
  fetchLogin,
} from '../actions/login';

// container
function mapStateToProps(state) {
  return {
    isFetching: state.login.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: values => dispatch(fetchLogin(values))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
