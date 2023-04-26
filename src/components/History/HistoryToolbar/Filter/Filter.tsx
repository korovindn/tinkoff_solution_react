import { Button, DatePicker, Form, Slider, Typography } from "antd";
import { useMemo, useState } from "react";
import { categories } from "../../../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { category } from "../../../../types/types";
import { CategorySelect } from "../../CategorySelect/CategorySelect";
import { setFilters } from "../../redux/historyActions";
import classes from "./styles/Filter.module.scss";

export const Filter: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const historyItems = useAppSelector((state) => state.history.items);
  const filters = useAppSelector((state) => state.history.filters);
  const presentedCategories = useMemo(
    () =>
      historyItems
        .reduce(
          (cats: string[], item) =>
            cats.includes(item.category) ? cats : [...cats, item.category],
          []
        )
        .map((cat) => categories.find((category) => category.value === cat))
        .filter((category) => typeof category !== "undefined") as category[],
    [historyItems]
  );
  const sumRange = useMemo(() => {
    const sums = historyItems.map((item) => item.sum);
    return {
      min: Math.min(...sums),
      max: Math.max(...sums),
    };
  }, [historyItems]);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const save = async () => {
    const data = await form.validateFields();
    const [ dateFrom, dateTo ] = data.date || [undefined, undefined];
    const [ sumFrom, sumTo ] = data.sum || [undefined, undefined];
    console.log(data, {
      ...data,
      date: {
        from: dateFrom,
        to: dateTo,
      },
      sum: { from: Number(sumFrom), to: Number(sumTo) },
    })
    return {
      ...data,
      date: {
        from: dateFrom,
        to: dateTo,
      },
      sum: { from: Number(sumFrom), to: Number(sumTo) },
    };
  };
  return (
    <div className={classes.filterWrapper}>
      <Typography.Link onClick={() => setVisible(!visible)}>
        Фильтр
      </Typography.Link>
      {visible ? (
        <Form form={form} className={classes.filter} initialValues={filters}>
          <Form.Item label="Дата" name="date">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item label="Сумма" name="sum">
            <Slider
              {...sumRange}
              disabled={sumRange.min === sumRange.max}
              range
            />
          </Form.Item>
          <Form.Item label="Категория" name="category">
            <CategorySelect categories={[{label: 'Не выбрана', value: ''}, ...presentedCategories]} />
          </Form.Item>
          <Form.Item>
            <Button
              className="multipleHorizontal"
              type="primary"
              onClick={async () => {
                dispatch(setFilters(await save()));
                setVisible(false);
              }}
            >
              Готово
            </Button>
            <Button
              className="multipleHorizontal"
              onClick={() => {
                dispatch(setFilters({}));
                setVisible(false);
              }}
            >
              Очистить
            </Button>
          </Form.Item>
        </Form>
      ) : null}
    </div>
  );
};
