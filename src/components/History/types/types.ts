import { id } from "../../../types/types";
import { Dayjs } from "dayjs";

export interface dateRange {
  from: Dayjs;
  to: Dayjs;
}

export interface range {
  from: number;
  to: number;
}

export interface historyItem {
  id: id;
  category: string;
  sum: number;
  date: Dayjs;
  desc?: string;
}

export interface filters {
  date?: dateRange;
  sum?: range;
  category?: string;
}

export interface sort {
  param: "sum" | "date" | "category";
  order: "asc" | "desc";
}

export interface historyState {
  items: historyItem[];
  editedItem: id | null;
  filters: filters;
  sort: sort;
}
