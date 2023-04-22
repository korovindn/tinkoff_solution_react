import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Button } from "antd";
import { HistoryItem } from "../HistoryItem/HistoryItem";
import { addItem } from "../redux/historyActions";
import classes from "./styles/HistoryList.module.scss";

export const HistoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const historyItems = useAppSelector((state) => state.history.items);
  return (
    <>
      <ul className={classes.historyList}>
        {historyItems.map((item) => (
          <HistoryItem {...item} key={item.id}/>
        ))}
      </ul>
      <Button
        type="primary"
        size="large"
        className={classes.addButton}
        onClick={() => dispatch(addItem())}
      >
        Добавить
      </Button>
    </>
  );
};
