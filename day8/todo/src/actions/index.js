/* Namespace Actions aka Action Types */
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const RESET = "RESET";


/* Action Creators */
export const add = (value={"name":"hi"}) => ({ type: ADD, value });
export const remove = (index=0) => ({ type: REMOVE });
export const reset = () => ({ type: RESET });