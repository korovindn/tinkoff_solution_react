import { AnyAction } from "redux";

interface helloState {
  hello: string;
}

const initialState: helloState = {
  hello: "Hello",
};

export const helloReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "BYE":
      return { ...state, hello: "Bye" };
    case "ASYNC_HELLO":
      return { ...state, hello: "HELLO" };
    default:
      return state;
  }
};
