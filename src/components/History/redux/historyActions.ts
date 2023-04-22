// import { dispatchType } from "../../../types/reduxTypes";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_EDITED_ITEM,
  SET_FILTERS_CATEGORY,
  SET_FILTERS_DATE,
  SET_FILTERS_SUM,
  SET_SORT,
} from "./historyActionTypes";

export const addItem = () => {
  return { type: ADD_ITEM };
};

export const removeItem = () => {
  return { type: REMOVE_ITEM };
};

export const setEditedItem = () => {
  return { type: SET_EDITED_ITEM };
};

export const setFiltersCategory = () => {
  return { type: SET_FILTERS_CATEGORY };
};

export const setFiltersSum = () => {
  return { type: SET_FILTERS_SUM };
};

export const setFiltersDate = () => {
  return { type: SET_FILTERS_DATE };
};

export const setSort = () => {
  return { type: SET_SORT };
};
