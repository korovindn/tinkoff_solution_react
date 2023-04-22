import { AnyAction } from "redux";
import { helloState } from "../types/types";

const initialState: helloState = {
  hello: "Hello",
};

export const helloReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "BYE":
      return { ...state, hello: "HeLlO" };
    case "ASYNC_HELLO":
      return { ...state, hello: "HELLO" };
    case "ASYNC_ONE_MORE":
      return { ...state, hello: action.payload}
    default:
      return state;
  }
};
