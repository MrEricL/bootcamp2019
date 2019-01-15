import { connect } from "react-redux";
import { add, remove, reset } from "../actions";
import ListTodos from './ListTodos';


const mapStateToProps = (state, ownProps) => {
  return {
    value: state.bunchOfThings,
    index: state.indexToRemove,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAdd: (value) => {
      dispatch(add(value));
    },
    onRemove: (index) => {
      dispatch(remove(index));
    },
    onReset: () => {
      dispatch(reset());
    }
  };
};

const TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);

export default TodoApp;