import {
  connect
} from 'react-redux';

import My from '../components/my';

import {
  fetchMy
} from '../actions/my';

function mapStateToProps(state) {
  return {
    data: state.my.data,
    isFetching: state.my.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getUserInfo: () => dispatch(fetchMy())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My)
