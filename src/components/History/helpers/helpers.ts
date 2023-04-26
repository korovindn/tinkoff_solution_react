import { Dayjs } from "dayjs";
import { dateRange, filters, historyItem, range, sort } from "../types/types";

export const isDateInRange = (date: Dayjs, range: dateRange) =>
  date.diff(range.from) >= 0 && date.diff(range.to) <= 0;

export const isSumInRange = (sum: number, range: range) =>
  sum >= range.from && sum <= range.to;

export const fitsTheFilter = (item: historyItem, filters: filters) =>
  ((!filters.date || !filters.date.from || !filters.date.to || isDateInRange(item.date, filters.date)) &&
  (!filters.sum || !filters.sum.from || !filters.sum.to || isSumInRange(item.sum, filters.sum)) &&
  (!filters.category || item.category === filters.category)) || !item.sum;

  export const itemsSorter = (sort: sort) => (a: historyItem, b: historyItem) =>
    sort.param && sort.order === "asc"
    ? a[sort.param] > b[sort.param] ? -1 : 1
    : a[sort.param] > b[sort.param] ? 1 : -1