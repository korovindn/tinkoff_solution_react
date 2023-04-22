import { createBrowserRouter } from "react-router-dom";
// import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { AddSpent } from "./pages/AddSpent/AddSpent";
import { History } from "./pages/History/History";
import { Stats } from "./pages/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <History/>,
  },
  {
    path: "/add",
    element: <AddSpent/>,
  },
  {
    path: "/stats",
    element: <Stats/>,
  },
]);
