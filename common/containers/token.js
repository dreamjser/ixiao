import {
  connect
} from 'react-redux';

import Token from '../components/token';
import {
  fetchToken
} from '../actions/token';

// container
function mapStateToProps(state) {
  return {
    data: state.token.data
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
)(Token);
