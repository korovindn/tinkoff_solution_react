import {
  SelectHTMLAttributes,
} from "react";
import { size } from "../../../../types/UITypes";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  elementSize?: size;
  options?: SelectOption[];
}
