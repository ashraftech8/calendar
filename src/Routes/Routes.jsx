import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CalendarComp from "../Component/Calendar/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <CalendarComp />,
        index: true,
      },
      {
        path: "activity",
        element: <h2>Activity Component Goes here...</h2>,
        index: true,
      },
      {
        path: "chat",
        element: <h2>Caht Component Goes here...</h2>,
        index: true,
      },
      {
        path: "team",
        element: <h2>Team Component Goes here...</h2>,
        index: true,
      },

      {
        path: "call",
        element: <h2>call Component Goes here...</h2>,
        index: true,
      },
    ],
  },
]);
