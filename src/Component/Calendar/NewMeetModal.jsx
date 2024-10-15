import React from "react";
import Toolbar from "./Toolbar";

const NewMeetModal = ({
  isUpdate,
  handleFormSubmit,
  formData,
  handleChange,
  error,
  handleOpenModal,
}) => {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75">
          <div className="bg-white   rounded-lg shadow-lg w-full max-w-7xl max-h-full h-[75%] overflow-y-auto p-6 transform transition-all duration-300">
            <div className=" flex items-center justify-between gap-2 mb-10">
              <div className=" flex items-center gap-2 ">
                <img src="/logo192.png" className="w-9 h-9 " alt="Logo" />
                <h2 className="text-xl pt-2 font-semibold mb-4">
                  {isUpdate ? "Update Meeting" : " New Meeting"}
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#5D5BD4] text-white py-2 px-8 rounded hover:bg-[#5D5BD4]"
                >
                  {isUpdate ? "Update Meeting" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="bg-gray-200 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-black hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <Toolbar />
            <div className="mb-4 mt-2">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange(e, "title")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Required Attendees</label>
              <input
                type="text"
                value={formData.attendees}
                onChange={(e) => handleChange(e, "attendees")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter attendees, separated by commas"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleChange(e, "startDate")}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">Start Time</label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleChange(e, "startTime")}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
            </div>

            <div className="mb-4 flex justify-between">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleChange(e, "endDate")}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">End Time</label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleChange(e, "endTime")}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Recurrence</label>
              <select
                value={formData.recurrence}
                onChange={(e) => handleChange(e, "recurrence")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              >
                <option value="Does not repeat">Does not repeat</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Add Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange(e, "location")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Add Agenda</label>
              <textarea
                value={formData.agenda}
                onChange={(e) => handleChange(e, "agenda")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter agenda details"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Online Meeting</label>
              <input
                type="checkbox"
                checked={formData.isOnlineMeeting}
                onChange={(e) => handleChange(e, "isOnlineMeeting")}
                className="mr-2"
              />
              <span>Enable Online Meeting</span>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Who Can Bypass the Lobby?
              </label>
              <select
                value={formData.lobbyBypass}
                onChange={(e) => handleChange(e, "lobbyBypass")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              >
                <option value="People in my org and guests">
                  People in my org and guests
                </option>
                <option value="Only people in my org">
                  Only people in my org
                </option>
              </select>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
          </div>
        </div>
      </form>
    </>
  );
};

export default NewMeetModal;
