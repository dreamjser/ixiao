import {
  connect
} from 'react-redux';
import Publish from '../components/publish';

import {
  fetchJoke,
} from '../actions/publish';

// container
function mapStateToProps(state) {
  return {
    isFetching: state.publish.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(fetchJoke(values))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publish);
