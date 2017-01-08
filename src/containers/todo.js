import { connect } from 'react-redux';
import Todo from 'components/todo';

import {
  addItem,
} from 'actions/todo';

function mapStateToProps(state){
  return {
    list: state.todo.todos
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddItem: (text) => dispatch(addItem(text))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
