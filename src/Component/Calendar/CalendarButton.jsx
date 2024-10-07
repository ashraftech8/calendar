import React from "react";

const CalendarButton = ({ openNewBookingModal }) => {
  return (
    <div className="flex w-full justify-end p-2 gap-2">
      <button
        onClick={() => alert("   # Join with an ID!!!1")}
        className="text-gray-800 border  font-bold py-2 px-4 rounded flex items-center"
      >
        # Join with an ID{" "}
      </button>
      <button
        onClick={() => alert("Meet now clikced!!!1")}
        className="flex gap-2 text-gray-800 border  font-bold py-2 px-4 rounded  "
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        Meet now
      </button>
      <button
        onClick={openNewBookingModal}
        className=" flex  gap-2  bg-[#5D5BD4] text-white font-bold py-2 px-4 rounded hover:bg-[#5856d3]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        New meeting
      </button>
    </div>
  );
};

export default CalendarButton;
