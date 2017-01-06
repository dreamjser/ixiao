import { connect } from 'react-redux';
import TodoHeader from 'components/todoHeader';

import {
  addItem,
} from 'actions/todo';

const mapStateToProps = (state) => ({
  text: 222
});

const mapDispatchToProps = (dispatch) => ({
  onAddItem: () => {
    dispatch(addItem({text: 2222}));
  }
});

const header = connect(
  mapStateToProps,
)(TodoHeader);

export default header;
