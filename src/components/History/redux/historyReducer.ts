import { AnyAction } from "redux";
import { historyItem, historyState, sort } from "../types/types";
import {
  ADD_ITEM,
  SET_EDITED_ITEM,
  SET_FILTERS,
  SET_ITEM,
  SET_SORT,
} from "./historyActionTypes";

const initialState: historyState = {
  items: [
    {
      id: "0",
      category: "random",
      desc: "random",
      sum: 1000,
      date: "2023-04-20",
    },
  ],
  editedItem: null,
  sumRange: { from: "2023-04-03", to: "2023-05-03", type: "за месяц" },
  sort: { param: "date", order: "asc" },
  filters: {},
};

export const historyReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_ITEM:
      const id = String(
        Math.max(...state.items.map((item) => Number(item.id))) + 1
      );
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: id,
            category: "",
            desc: "",
            sum: 0,
            date: new Date().toISOString().substring(0, 10),
          },
        ],
        editedItem: id,
      };

    case SET_EDITED_ITEM:
      return {
        ...state,
        editedItem: action.payload.id,
      };

    case SET_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id)
            return action.payload as historyItem;
          else return item;
        }),
      };

    case SET_SORT:
      return {
        ...state,
        sort: action.payload.sort,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload.filters,
      }
    default:
      return state;
  }
};
