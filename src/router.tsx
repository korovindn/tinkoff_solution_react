import { createBrowserRouter } from "react-router-dom";
import { History } from "./pages/History/History";
import config from "./config.json";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <History />,
    },
  ],
  {
    basename: config.BASENAME,
  }
);
