import { connect } from 'react-redux';
import TodoList from 'components/todoList';

const mapStateToProps = (state) => ({
  list: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({
  onAddItem: () => {
    console.log(addItem);
    dispatch(addItem());
  }
});

const list = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default list;
