import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy load the components
const App = React.lazy(() => import("../App"));
const CalendarComp = React.lazy(() => import("../Component/Calendar/Calendar"));

// Router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading App...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Calendar...</div>}>
            <CalendarComp />
          </Suspense>
        ),
        index: true,
      },
      {
        path: "activity",
        element: <h2>Activity Component Goes here...</h2>,
        index: true,
      },
      {
        path: "chat",
        element: <h2>Chat Component Goes here...</h2>,
        index: true,
      },
      {
        path: "team",
        element: <h2>Team Component Goes here...</h2>,
        index: true,
      },
      {
        path: "call",
        element: <h2>Call Component Goes here...</h2>,
        index: true,
      },
    ],
  },
]);
