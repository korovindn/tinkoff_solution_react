import { sumRange } from "../../types/types";

export const isInRange = (date: string, range: sumRange) => {
  console.log(new Date(date).getTime())
  return new Date(date).getTime() >= new Date(range.from).getTime() && 
  new Date(date).getTime() <= new Date(range.to).getTime()
};
