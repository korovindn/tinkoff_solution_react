import { HistoryItemProps } from "./types/types";
import classes from "./styles/HistoryItem.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setEditedItem, setItem } from "../redux/historyActions";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { categories, dateFormat } from "../../../constants/constants";
import { EditedItem } from "./EditedItem";
import { useMemo } from "react";
import { randomColor } from "../../../helpers/helpers";

export const HistoryItem: React.FC<HistoryItemProps> = ({
  category,
  sum,
  desc,
  id,
  date,
}) => {
  const editedItem = useAppSelector((state) => state.history.editedItem);
  const dispatch = useAppDispatch();
  const categoryLabel = useMemo(() => categories.find(cat => cat.value === category)?.label, [category])
  const bgColor = useMemo(() => `#${randomColor()}`, [])
  if (editedItem === id)
    return (
      <EditedItem
        category={category}
        sum={sum}
        desc={desc}
        id={id}
        date={date}
      />
    );
  return (
    <li
      className={classes.historyItem}
      onDoubleClick={() => dispatch(setEditedItem(id))}
    >
      <div className={classes.historyItemImage} style={{backgroundColor: bgColor}}>
        <img src={`/images/${category}.png`}/>
      </div>
      <div className={classes.historyItemData}>
        <h2 className={classes.historyItemSum}>{sum} рублей</h2>
        <p className={classes.historyItemDate}>{date.format(dateFormat)}</p>
        <p className={classes.historyItemCategory}>{categoryLabel}</p>
        <p className={classes.historyItemDesc}>{desc}</p>
      </div>
    </li>
  );
};
