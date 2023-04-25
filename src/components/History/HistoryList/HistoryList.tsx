import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Button } from "antd";
import { HistoryItem } from "../HistoryItem/HistoryItem";
import { addItem } from "../redux/historyActions";
import classes from "./styles/HistoryList.module.scss";
import { useMemo } from "react";
import { fitsTheFilter, itemsSorter } from "../helpers/helpers";

export const HistoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const historyState = useAppSelector((state) => state.history);
  const filteredItems = useMemo(
    () =>
      historyState.items
        .filter((item) => fitsTheFilter(item, historyState.filters))
        .sort(itemsSorter(historyState.sort)),
    [historyState.items, historyState.filters, historyState.sort]
  );
  return (
    <>
      <ul className={classes.historyList}>
        {filteredItems.length ? (
          filteredItems.map((item) => <HistoryItem {...item} key={item.id} />)
        ) : (
          <div className={classes.placeholder}>Нет подходящих элементов</div>
        )}
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
