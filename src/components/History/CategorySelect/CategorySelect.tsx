import classes from "./styles/CategorySelect.module.scss";
import { Select } from "antd";
import { CategorySelectProps } from "./types/types";
import config from "../../../config.json";

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  ...props
}) => {
  return (
    <Select {...props}>
      {categories.map((cat) => (
        <Select.Option
          value={cat.value}
          key={cat.value}
          className={classes.selectOption}
        >
          {cat.value ? (
            <img
              alt={cat.label}
              src={`${config.BASENAME}/images/${cat.value}.png`}
              className={classes.selectOptionImage}
            />
          ) : null}
          {cat.label}
        </Select.Option>
      ))}
    </Select>
  );
};
