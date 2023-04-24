import { Dayjs } from "dayjs";
import { dateRange, filters, historyItem, range } from "../types/types";

export const isDateInRange = (date: Dayjs, range: dateRange) =>
  date.diff(range.from) > 0 && date.diff(range.to) < 0;

export const isSumInRange = (sum: number, range: range) =>
  sum > range.from && sum < range.to;

export const fitsTheFilter = (item: historyItem, filters: filters) =>
  (!filters.date || isDateInRange(item.date, filters.date)) &&
  (!filters.sum || isSumInRange(item.sum, filters.sum)) &&
  (!filters.category || item.category === filters.category);
