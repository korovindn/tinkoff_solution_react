// import { dispatchType } from "../../../types/reduxTypes";
import { id } from "../../../types/types";
import { filters, historyItem, sort } from "../types/types";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_EDITED_ITEM,
  SET_FILTERS,
  SET_ITEM,
  SET_SORT,
} from "./historyActionTypes";

export const addItem = () => {
  return { type: ADD_ITEM };
};

export const removeItem = () => {
  return { type: REMOVE_ITEM };
};

export const setEditedItem = (id: id | null) => {
  return { type: SET_EDITED_ITEM, payload: {id}};
};

export const setItem = (item: historyItem) => {
  return {type: SET_ITEM, payload: item}
}

export const setFilters = (filters: filters) => {
  return { type: SET_FILTERS, payload: {filters} };
};


export const setSort = (sort: sort) => {
  return { type: SET_SORT, payload: {sort} };
};
