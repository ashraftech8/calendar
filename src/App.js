import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import CalendarComp from "./Component/Calendar/Calendar";
import SideBar from "./Component/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1">
        <div className="w-full bg-gray-100 p-4 flex items-center justify-center">
          <input
            type="text"
            className="w-1/3 py-2 px-4 rounded-md bg-white shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search (Ctrl+E)"
          />
        </div>
        {/* Main Content */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
