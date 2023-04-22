import { useMemo, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { Input } from "../../../shared/Input/Input";
import { Select } from "../../../shared/Select/Select";
import classes from "./styles/Filter.module.scss";

export const Filter: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const historyItems = useAppSelector((state) => state.history.items);
  const filters = useAppSelector((state) => state.history.filters);
  const categories = useMemo(
    () =>
      historyItems.reduce(
        (cats: string[], item) =>
          cats.includes(item.cagtegory) ? cats : [...cats, item.cagtegory],
        []
      ),
    [historyItems]
  );
  return (
    <div className={classes.filterWrapper}>
      <span onClick={() => setVisible(!visible)}>Фильтр</span>
      {visible ? (
        <div className={classes.filter}>
          <div className={classes.filterItem}>
            Дата:
            <Input type="date" value={filters.date?.from.toLocaleString() ?? new Date().toLocaleString() }/>
            <Input type="date" value={filters.date?.to.toLocaleString() ?? new Date().toLocaleString() }/>
          </div>
          <div className={classes.filterItem}>
            Сумма:
            <Input value={filters.sum?.from}/>
            <Input value={filters.sum?.to}/>
          </div>
          <div className={classes.filterItem}>
            Категория:
            <Select options={categories.map(cat => ({label: cat, value: cat}))}/>
          </div>
        </div>
      ) : null}
    </div>
  );
};
