import { id } from "../../../types/types";

export interface sumRange {
  from: string;
  to: string;
  type: "за месяц" | "за год" | "за неделю" | "пользовательский";
}

export interface historyItem {
  id: id;
  category: string;
  sum: number;
  date: string;
  desc?: string;
}

export interface filters {
  date?: {
    from: string;
    to: string;
  };
  sum?: {
    from: number;
    to: number;
  };
  category?: string;
}

export interface sort {
  param?: "sum" | "date" | "cat";
  order?: "asc" | "desc";
}

export interface historyState {
  items: historyItem[];
  editedItem: id | null;
  sumRange: sumRange;
  filters: filters;
  sort: sort;
}
