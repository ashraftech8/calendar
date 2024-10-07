import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-[74px]  bg-gray-100 h-full flex flex-col items-center ml-1 py-4">
      <div className="mb-10">
        <img
          src="/download.jpeg"
          className="w-full h-9 "
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className={`flex w-[74px] h-16 flex-col items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "activity"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => {
          navigate("/activity");
          setSelected("activity");
        }}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            selected === "activity" ? "text-[#2f2f2f]" : "text-gray-500"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <span
          className={`${
            selected === "activity" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          Activity{" "}
        </span>
      </div>
      {/* Chat */}
      <div
        className={`flex w-[74px] h-16  flex-col items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "Chat"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => {
          navigate("/chat");
          setSelected("Chat");
        }}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            selected === "Chat" ? "text-[#2f2f2f]" : "text-gray-500"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <span
          className={`${
            selected === "Chat" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          Chat{" "}
        </span>
      </div>
      {/*     Teams   */}
      <div
        className={`flex flex-col w-[74px] h-16  items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "Teams"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => {
          navigate("/team");
          setSelected("Teams");
        }}
      >
        {/* <TeamsIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            selected === "Teams" ? "text-[#2f2f2f]" : "text-gray-500"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>

        <span
          className={`${
            selected === "Teams" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          Teams{" "}
        </span>
      </div>{" "}
      {/*     Calendar     */}
      <div
        className={`flex  w-[74px] h-16  flex-col items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "Calendar"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => {
          navigate("/");
          setSelected("Calendar");
        }}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`flex flex-col items-center p-2 hover:bg-gray-200 rounded-sm ${
            selected === "Calendar" ? "text-[#5D5BD4]  border-l-[#5D5BD4]" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>

        <span
          className={`${
            selected === "Calendar" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          Calendar{" "}
        </span>
      </div>{" "}
      {/*     Calls     */}
      <div
        className={`flex flex-col w-[74px] h-16  items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "Calls"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => {
          navigate("/call");
          setSelected("Calls");
        }}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <span
          className={`${
            selected === "Calls" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          Calls{" "}
        </span>
      </div>
      {/*  OneDrive */}
      <div
        className={`flex flex-col w-[74px] h-16  items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "OneDrive"
            ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]"
            : ""
        }`}
        onClick={() => setSelected("OneDrive")}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`flex flex-col items-center p-2 hover:bg-gray-200 rounded-sm ${
            selected === "OneDrive" ? "text-[#5D5BD4]  border-l-[#5D5BD4]" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>

        <span
          className={`${
            selected === "OneDrive" ? "text-[#5D5BD4] " : " text-gray-500"
          }  text-xs`}
        >
          OneDrive{" "}
        </span>
      </div>
      {/*  */}
      <div
        className={`flex flex-col w-[74px] h-12 justify-center items-center p-2 hover:bg-gray-200 rounded-sm ${
          selected === "" ? "text-[#5D5BD4] border-l-2 border-l-[#5D5BD4]" : ""
        }`}
        onClick={() => setSelected("")}
      >
        {/* <ChatIcon className="h-6 w-6 text-gray-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        {/* <span className="text-gray-100 text-xs">OneDrive </span> */}
      </div>
    </div>
  );
};

export default SideBar;
