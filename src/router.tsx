import { createBrowserRouter } from "react-router-dom";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld/>,
  },
  {
    path: "/hello",
    element: <HelloWorld/>,
  },
]);
