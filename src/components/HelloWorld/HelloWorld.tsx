import React from "react";
import classes from "./styles/HelloWorld.module.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { asyncHello, asyncOneMore, byeAction } from "./redux/helloActions";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

export const HelloWorld: React.FC = () => {
  const hello = useAppSelector((state) => state.hello.hello);
  const dispatch = useAppDispatch();
  return (
    <div
      className={classes.hello}
      onClick={() => dispatch(byeAction())}
      onDoubleClick={() => dispatch(asyncHello())}
      onContextMenu={() => dispatch(asyncOneMore())}
    >
      {hello} <Button elementSize="M">Hello</Button>
      <Input elementSize='S' onChange={() => {}} value=''/>
      <Select options={[{label: 'Hello', value: 'World'}]}></Select>
    </div>
    
  );
};
