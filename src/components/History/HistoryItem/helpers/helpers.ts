import { sumRange } from "../../types/types";

export const isInRange = (date: Date, range: sumRange) =>
  date.getTime() >= range.from.getTime() && date.getTime() <= range.to.getTime();
