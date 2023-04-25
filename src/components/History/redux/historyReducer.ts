import { AnyAction } from "redux";
import { filters, historyItem, historyState, sort } from "../types/types";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_EDITED_ITEM,
  SET_FILTERS,
  SET_ITEM,
  SET_SORT,
} from "./historyActionTypes";
import dayjs from "dayjs";

const blankItem = (id: string) => ({
  id: id,
  category: "",
  desc: "",
  sum: 0,
  date: dayjs(),
})

const initialState: historyState = {
  items: [
    {
      id: "0",
      category: "food",
      desc: "Вкусно и точка",
      sum: 1000,
      date: dayjs(),
    },
  ],
  editedItem: null,
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
          blankItem(id),
        ],
        editedItem: id,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
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
        sort: action.payload.sort as sort,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload.filters as filters,
      }
    default:
      return state;
  }
};
