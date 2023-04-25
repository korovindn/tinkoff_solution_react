import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { fitsTheFilter } from "../helpers/helpers";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { randomColor } from "../../../helpers/helpers";
import { categories } from "../../../constants/constants";
import classes from "./styles/HistorySummary.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      borderWidth: 1,
    },
  ],
};

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
  const grouped = useMemo(() => historyState.items.filter(item => fitsTheFilter(item, historyState.filters)).reduce((grouped: {category: string, sum: number}[], item) => {
    const index = grouped.findIndex(group => group.category === item.category);
    if(index >= 0) {
      grouped[index].sum += item.sum
      return grouped
    }
    return [...grouped, {category: item.category, sum: item.sum}]
  } , []), [historyState.items, historyState.filters])
  const data = useMemo<ChartData<"pie">>(() => ({
    labels: grouped.map(group => categories.find(cat => cat.value === group.category)?.label),
    datasets: [{
      label: 'Траты по категориям',
      data: grouped.map(group => group.sum),
      backgroundColor: grouped.map(() => `#${randomColor()}`)
    }]
  }), [grouped])
  return (
    <div className={classes.summaryContainer}>
      <h2 className={classes.summaryMain}>Всего {sum} рублей</h2>
      <div className={classes.chartContainer}><Pie data={data} /></div>
    </div>
  );
};
