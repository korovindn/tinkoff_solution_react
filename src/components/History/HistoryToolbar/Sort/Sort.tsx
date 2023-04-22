import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import classes from "./styles/Sort.module.scss";
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';
import { setSort } from "../../redux/historyActions";

export const Sort: React.FC = () => {
  const sort = useAppSelector((state) => state.history.sort);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.sort}>
      Сортировка:
      <span
        onClick={() => dispatch(setSort({param: 'sum', order: 'asc'}))}
        className={`${classes.sortItem} ${
          sort.param === "sum" ? classes.sortItemActive : ""
        }`}
      >
        {sort.param === "sum" && sort.order === 'asc' ? <CaretDownOutlined/> : <CaretUpOutlined/>}
        по сумме
      </span>
      <span
        onClick={() => dispatch(setSort({param: 'date', order: 'asc'}))}
         className={`${classes.sortItem} ${
          sort.param === "date" ? classes.sortItemActive : ""
        }`}>
          {sort.param === "date" && sort.order === 'asc' ? <CaretDownOutlined/> : <CaretUpOutlined/>}
          по дате</span>
      <span
        onClick={() => dispatch(setSort({param: 'cat', order: 'asc'}))}
         className={`${classes.sortItem} ${
          sort.param === "cat" ? classes.sortItemActive : ""
        }`}>
          {sort.param === "cat" && sort.order === 'asc' ? <CaretDownOutlined/> : <CaretUpOutlined/>}
          по категории</span>
    </div>
  );
};
