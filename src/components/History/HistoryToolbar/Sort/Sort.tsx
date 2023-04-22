import classes from "./styles/Sort.module.scss";

export const Sort: React.FC = () => {
  return (
    <div className={classes.sort}>
      Сортировка: <span className={classes.sortItem}>по сумме</span>{" "}
      <span className={classes.sortItem}>по дате</span>
      <span className={classes.sortItem}>по категории</span>
    </div>
  );
};
