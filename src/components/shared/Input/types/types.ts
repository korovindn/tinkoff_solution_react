import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { size } from "../../../../types/UITypes";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize?: size;
  onChange?: ChangeEventHandler;
  value?: string;
}
