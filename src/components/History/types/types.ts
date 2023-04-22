import { id } from "../../../types/types";

export interface sumRange {
  from: Date,
  to: Date,
  type: 'mounth' | 'year' | 'week' | 'custom',
}

export interface historyItem {
  id: id;
  cagtegory: string;
  sum: number;
  date: Date;
  desc?: string;
}

export interface historyState {
  items: historyItem[];
  editedItem: id | null;
  sumRange: sumRange;
}
