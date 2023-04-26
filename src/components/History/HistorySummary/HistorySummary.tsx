import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { fitsTheFilter } from "../helpers/helpers";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { randomColor } from "../../../helpers/helpers";
import { categories } from "../../../constants/constants";
import classes from "./styles/HistorySummary.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  const grouped = useMemo(
    () =>
      historyState.items
        .filter((item) => fitsTheFilter(item, historyState.filters))
        .reduce((grouped: { category: string; sum: number }[], item) => {
          const index = grouped.findIndex(
            (group) => group.category === item.category
          );
          if (index >= 0) {
            grouped[index].sum += item.sum;
            return grouped;
          }
          return [...grouped, { category: item.category, sum: item.sum }];
        }, []),
    [historyState.items, historyState.filters]
  );
  const data = useMemo<ChartData<"pie">>(
    () => ({
      labels: grouped.map(
        (group) => categories.find((cat) => cat.value === group.category)?.label
      ),
      datasets: [
        {
          label: "Траты по категориям",
          data: grouped.map((group) => group.sum),
          backgroundColor: grouped.map(() => `#${randomColor()}`),
        },
      ],
    }),
    [grouped]
  );
  return (
    <div className={classes.summaryContainer}>
      <h2 className={classes.summaryMain}>Всего {sum} рублей</h2>
      <div className={classes.chartContainer}>
        <Pie data={data} />
      </div>
    </div>
  );
};
