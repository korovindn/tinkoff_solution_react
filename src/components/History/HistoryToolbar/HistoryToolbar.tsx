import { Filter } from "./Filter/Filter";
import { Sort } from "./Sort/Sort";
import classes from "./styles/HistoryToolbar.module.scss";

export const HistoryToolbar: React.FC = () => {
  return (
    <div className={classes.toolbar}>
      <Filter />
      <Sort />
    </div>
  );
};
