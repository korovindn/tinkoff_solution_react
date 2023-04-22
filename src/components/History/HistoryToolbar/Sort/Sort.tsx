import { useAppSelector } from "../../../../redux/hooks";
import classes from "./styles/Sort.module.scss";

export const Sort: React.FC = () => {
  const sort = useAppSelector((state) => state.history.sort);

  return (
    <div className={classes.sort}>
      Сортировка:{" "}
      <span
        className={`${classes.sortItem} ${
          sort.param === "sum" ? classes.sortItemActive : ""
        }`}
      >
        по сумме
      </span>{" "}
      <span className={`${classes.sortItem} ${
          sort.param === "date" ? classes.sortItemActive : ""
        }`}>по дате</span>
      <span className={`${classes.sortItem} ${
          sort.param === "cat" ? classes.sortItemActive : ""
        }`}>по категории</span>
    </div>
  );
};
