import { useAppSelector } from "../../../redux/hooks";
import { Button } from "../../shared/Button/Button";
import { HistoryItem } from "../HistoryItem/HistoryItem";
import classes from './styles/HistoryList.module.scss';

export const HistoryList: React.FC = () => {
  const historyItems = useAppSelector((state) => state.history.items);
  return (
    <>
      <ul className={classes.historyList}>
        {historyItems.map((item) => (
          <HistoryItem {...item} />
        ))}
      </ul>
      <Button displayType="primary" elementSize="L" className={classes.addButton}>Добавить</Button>
    </>
  );
};
