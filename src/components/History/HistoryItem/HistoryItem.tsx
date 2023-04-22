import { HistoryItemProps } from "./types/types"
import classes from './styles/HistoryItem.module.scss'

export const HistoryItem: React.FC<HistoryItemProps> = ({cagtegory, sum, desc}) => {
  return <li className={classes.historyItem}>
    <h2 className={classes.historyItemSum}>{sum}</h2>
    <p className={classes.historyItemCategory}>{cagtegory}</p>
    <p className={classes.historyItemDesc}>{desc}</p>
  </li>
}