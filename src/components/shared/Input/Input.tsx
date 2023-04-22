import { InputProps } from "./types/types";
import classes from "./styles/Input.module.scss";

export const Input: React.FC<InputProps> = ({
  elementSize = "M", ...props
}) => {
  return (
    <input
      {...props}
      className={`${classes.input} ${
        elementSize === "L"
          ? classes.inputLarge
          : elementSize === "S"
          ? classes.inputSmall
          : ""
      }`}
    />
  );
};
