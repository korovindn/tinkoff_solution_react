import React from "react";
import classes from "./HelloWorld.module.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { asyncHello, byeAction } from "./helloActions";

export const HelloWorld: React.FC = () => {
  const hello = useAppSelector((state) => state.hello.hello);
  const dispatch = useAppDispatch();
  return (
    <div
      className={classes.hello}
      onClick={() => dispatch(byeAction())}
      onDoubleClick={() => dispatch(asyncHello())}
    >
      {hello}
    </div>
  );
};
