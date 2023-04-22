import { HistoryItemProps } from "./types/types";
import classes from "./styles/HistoryItem.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setEditedItem, setItem } from "../redux/historyActions";
import { Form, Input, Button } from "antd";

export const HistoryItem: React.FC<HistoryItemProps> = ({
  category,
  sum,
  desc,
  id,
  date,
}) => {
  const editedItem = useAppSelector((state) => state.history.editedItem);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const save = async () => {
    return await form.validateFields();
  };
  if (editedItem === id)
    return (
      <li className={classes.historyItem}>
        <Form form={form} initialValues={{category, sum, desc}}>
          <Form.Item label="Сумма" name="sum">
            <Input addonAfter='рублей'/>
          </Form.Item>
          <Form.Item label="Категория" name="category">
            <Input />
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
  else
    return (
      <li
        className={classes.historyItem}
        onDoubleClick={() => dispatch(setEditedItem(id))}
      >
        <h2 className={classes.historyItemSum}>{sum} рублей</h2>
        <p className={classes.historyItemCategory}>{category}</p>
        <p className={classes.historyItemDesc}>{desc}</p>
      </li>
    );
};
