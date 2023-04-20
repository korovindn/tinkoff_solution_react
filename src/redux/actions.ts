import { AnyAction } from "redux";

export const byeAction = () => {
  return { type: "BYE" };
};

export const asyncHello = () => {
  return (dispatch: (action: AnyAction) => void) => {
    setTimeout(() => dispatch({ type: "ASYNC_HELLO" }), 1000);
  };
};
