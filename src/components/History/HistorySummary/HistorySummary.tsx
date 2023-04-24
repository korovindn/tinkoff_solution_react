import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { fitsTheFilter } from "../helpers/helpers";

export const HistorySummary: React.FC = () => {
  const historyState = useAppSelector((state) => state.history);
  const sum = useMemo(
    () =>
      historyState.items.reduce(
        (sum, item) =>
          fitsTheFilter(item, historyState.filters) ? sum + item.sum : sum,
        0
      ),
    [historyState.items, historyState.filters]
  );
  return (
    <>
      <h2>Всего {sum} рублей</h2>
    </>
  );
};
