import { Button, DatePicker, Form, Select, Slider } from "antd";
import { useMemo, useState } from "react";
import { dateFormat } from "../../../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setFilters } from "../../redux/historyActions";
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
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const save = async () => {
    const data = await form.validateFields();
    const [dateFrom, dateTo] = data.date
    const [sumFrom, sumTo] = data.sum
    return {
      ...data,
      date: {from: dateFrom.format(dateFormat), to: dateTo.format(dateFormat)},
      sum: {from: sumFrom, to: sumTo},
    };
  };
  return (
    <div className={classes.filterWrapper}>
      <span onClick={() => setVisible(!visible)}>Фильтр</span>
      {visible ? (
        <Form form={form} className={classes.filter}>
          <Form.Item label="Дата" name="date">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item label="Сумма" name="sum">
            <Slider range max={100000} dots step={100} />
          </Form.Item>
          <Form.Item name="category" label="Категория">
            <Select
              options={categories.map((cat) => ({ label: cat, value: cat }))}
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={async () => {
                dispatch(setFilters(await save()));
                setVisible(false);
              }}
            >
              Готово
            </Button>
          </Form.Item>
        </Form>
      ) : null}
    </div>
  );
};
