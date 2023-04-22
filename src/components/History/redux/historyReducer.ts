import { AnyAction } from "redux";
import { historyItem, historyState } from "../types/types";
import { ADD_ITEM, SET_EDITED_ITEM, SET_ITEM } from "./historyActionTypes";

const initialState: historyState = {
  items: [{id: '0', category: 'random', desc: 'random', sum: 1000, date: '20.03.2023'}],
  editedItem: null,
  sumRange: {from: '20.03.2023', to: '22.04.2023', type: 'за месяц'},
  sort: {param: "date", order: 'asc'},
  filters: {}
};

export const historyReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, {
        id: String(Math.max(...state.items.map(item => Number(item.id)))+1),
        category: '',
        desc: '',
        sum: 0,
        date: '10-01-2022'
      }] };

    case SET_EDITED_ITEM:
      return {
        ...state,
        editedItem: action.payload.id
      };

    case SET_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if(item.id === action.payload.id)
            return action.payload as historyItem
          else return item
        })
      }
    default:
      return state;
  }
};
