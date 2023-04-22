import { id } from "../../../types/types";

export interface sumRange {
  from: Date;
  to: Date;
  type: "за месяц" | "за год" | "за неделю" | "пользовательский";
}

export interface historyItem {
  id: id;
  cagtegory: string;
  sum: number;
  date: Date;
  desc?: string;
}

export interface filters {
  date?: {
    from: Date;
    to: Date;
  };
  sum?: {
    from: number;
    to: number;
  };
  category?: string;
}

export interface sort {
  param?: string;
  order?: "asc" | "desc";
}

export interface historyState {
  items: historyItem[];
  editedItem: id | null;
  sumRange: sumRange;
  filters: filters;
  sort: sort;
}
