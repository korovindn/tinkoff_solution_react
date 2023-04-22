import { dispatchType } from "../../../types/reduxTypes";


export const byeAction = () => {
  return { type: "BYE" };
};

export const asyncHello = () => {
  return (dispatch: dispatchType) => {
    setTimeout(() => dispatch({ type: "ASYNC_HELLO" }), 1000);
  };
};

export const asyncOneMore = () => {
  return (dispatch: dispatchType) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(res => dispatch({type: "ASYNC_ONE_MORE", payload: res.title}))
  }
}