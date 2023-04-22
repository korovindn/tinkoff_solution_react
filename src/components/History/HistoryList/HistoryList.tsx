import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Button } from "antd";
import { HistoryItem } from "../HistoryItem/HistoryItem";
import { addItem } from "../redux/historyActions";
import classes from "./styles/HistoryList.module.scss";
import { isInRange } from "../HistoryItem/helpers/helpers";
import { useEffect, useMemo } from "react";

export const HistoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const historyState = useAppSelector((state) => state.history);
  const filteredItems = useMemo(
    () =>
      historyState.items.filter(
        (item) =>
          !historyState.filters.date ||
          isInRange(item.date, historyState.filters.date)
      ),
    [historyState.items, historyState.filters, historyState.sort]
  );
  return (
    <>
      <ul className={classes.historyList}>
        {filteredItems.map((item) => (
          <HistoryItem {...item} key={item.id} />
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
