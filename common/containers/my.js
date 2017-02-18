import {
  connect
} from 'react-redux';

import My from '../components/my';

import {
  fetchLogout
} from '../actions/my';

function mapStateToProps(state) {
  return {
    data: state.my.data,
    isFetching: state.my.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return{
    doLogout: () => dispatch(fetchLogout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My)
