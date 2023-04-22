import { SelectProps } from "./types/types";
import classes from "./styles/Select.module.scss";

export const Select: React.FC<SelectProps> = ({
  elementSize = "M",
  options = [], 
  ...props
}) => {
  return (
    <select
      {...props}
      className={`${classes.input} ${
        elementSize === "L"
          ? classes.inputLarge
          : elementSize === "S"
          ? classes.inputSmall
          : ""
      }`}
    >
      {options.map((el) => <option value={el.value}>{el.label}</option>)}
    </select>
  );
};
