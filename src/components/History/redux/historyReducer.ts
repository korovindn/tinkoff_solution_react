import { AnyAction } from "redux";
import { historyState } from "../types/types";

const initialState: historyState = {
  items: [{id: '0', cagtegory: 'random', desc: 'random', sum: 1000, date: new Date()}],
  editedItem: null,
  sumRange: {from: new Date(), to: new Date(), type: 'за месяц'},
  sort: {},
  filters: {}
};

export const historyReducer = (state = initialState, action: AnyAction) => {
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
