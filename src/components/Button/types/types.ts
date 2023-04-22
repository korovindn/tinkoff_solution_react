import { ButtonHTMLAttributes, ReactNode } from "react";
import { size, type } from "../../../types/UITypes";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  elementSize?: size;
  displayType?: type;
}