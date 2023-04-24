import { HistoryItemProps } from "./types/types";
import classes from "./styles/HistoryItem.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { setEditedItem, setItem } from "../redux/historyActions";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { categories } from "../../../constants/constants";

export const EditedItem: React.FC<HistoryItemProps> = ({
  category,
  sum,
  desc,
  id,
  date,
}) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const save = async () => {
    const data = await form.validateFields();
    return { ...data, sum: Number(data.sum) };
  };
  return (
    <li className={classes.historyItem}>
      <Form form={form} initialValues={{ category, sum, desc }}>
        <Form.Item label="Сумма" name="sum">
          <Input addonAfter="рублей" />
        </Form.Item>
        <Form.Item label="Дата" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Категория" name="category">
          <Select>
            {categories.map((cat) => (
              <Select.Option value={cat.value} className={classes.selectOption}>
                <img
                  src={`/images/${cat.value}.png`}
                  className={classes.selectOptionImage}
                />{" "}
                {cat.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Примечание" name="desc">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={async () => {
              dispatch(setEditedItem(null));
              dispatch(setItem({ ...(await save()), date, id }));
            }}
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </li>
  );
};
