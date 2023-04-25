import { SelectProps } from "antd";
import { categories } from "../../../../types/types";

export interface CategorySelectProps extends SelectProps {
  categories: categories
}