import { Button, DatePicker, Form, Input, Select } from "antd";
import { useMemo, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import classes from "./styles/Filter.module.scss";

export const Filter: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const historyItems = useAppSelector((state) => state.history.items);
  const filters = useAppSelector((state) => state.history.filters);
  const categories = useMemo(
    () =>
      historyItems.reduce(
        (cats: string[], item) =>
          cats.includes(item.category) ? cats : [...cats, item.category],
        []
      ),
    [historyItems]
  );
  const [form] = Form.useForm()
  const save = async () => {
    const data = await form.validateFields();
    
  }
  return (
    <div className={classes.filterWrapper}>
      <span onClick={() => setVisible(!visible)}>Фильтр</span>
      {visible ? (
        <Form form={form} className={classes.filter}>
          <Form.Item label="Дата" />
          <Form.Item name="dateFrom" label="От">
            <DatePicker />
          </Form.Item>
          <Form.Item name="dateTo" label="До">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Сумма" />
          <Form.Item name="sumFrom" label="От">
            <Input value={filters.sum?.from} />
          </Form.Item>
          <Form.Item name="sumTo" label="До">
            <Input value={filters.sum?.to} />
          </Form.Item>
          <Form.Item name="category" label="Категория">
            <Select
              options={categories.map((cat) => ({ label: cat, value: cat }))}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={() => {
              save();
              setVisible(false);
            }}>Готово</Button>
          </Form.Item>
        </Form>
      ) : null}
    </div>
  );
};
