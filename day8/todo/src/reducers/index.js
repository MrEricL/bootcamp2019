import { ADD, REMOVE, RESET} from "../actions";

// initialize default state
const initialState = {
  bunchOfThings: [{"name": "test"}]
};

// create reducer function


export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case ADD:
      newState.push(action.value);
      return Object.assign({}, state, newState);
    case REMOVE:
      newState.splice(action.index,1);
      return Object.assign({}, state, newState);
    case RESET:
      return Object.assign({}, state, (state.bunchOfThings = []));
    default:
      return state;
  }
};