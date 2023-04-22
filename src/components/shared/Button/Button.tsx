import { ButtonProps } from "./types/types";
import classes from "./styles/Button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  elementSize = "M",
  displayType = "default",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${
        displayType === "primary" ? classes.buttonPrimary : ""
      } ${
        elementSize === "L"
          ? classes.buttonLarge
          : elementSize === "S"
          ? classes.buttonSmall
          : ""
      }`}
    >
      {children}
    </button>
  );
};
