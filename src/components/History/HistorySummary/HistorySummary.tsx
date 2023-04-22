import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { isInRange } from "../HistoryItem/helpers/helpers";

export const HistorySummary: React.FC = () => {
  const historyState = useAppSelector((state) => state.history);
  const sum = useMemo(
    () =>
      historyState.items.reduce(
        (sum, curr) =>
          isInRange(curr.date, historyState.sumRange) ? sum + curr.sum : sum,
        0
      ),
    [historyState.items, historyState.sumRange]
  );
  return (
    <>
      <h2>{sum} рублей</h2>
      <h3>за месяц</h3>
    </>
  );
};
