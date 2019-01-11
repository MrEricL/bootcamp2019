import { ADD, REMOVE, RESET} from "../actions";

// initialize default state
const initialState = {
  bunchOfThings: []
};

// create reducer function


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const biggerList = state.bunchOfThings;
      biggerList.push(action.value);
      return Object.assign({}, state, biggerList);
    case REMOVE:
      const smallerList = state.bunchOfThings;
      smallerList.splice(action.index,1);
      return Object.assign({}, state, smallerList);
    case RESET:
      return Object.assign({}, state, (state.bunchOfThings = []));
    default:
      return state;
  }
};