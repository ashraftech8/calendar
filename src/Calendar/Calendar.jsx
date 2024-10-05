import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function CalendarComp() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    agenda: "",
    startDate: "",
    startTime: "",
    attendees: "",
    location: "",
    recurrence: "Does not repeat",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState("");

  const openNewBookingModal = () => {
    setFormData({
      title: "",
      agenda: "",
      startDate: "",
      startTime: "",
      attendees: "",
      location: "",
      recurrence: "Does not repeat",
    });
    setIsModalOpen(true);
    setIsUpdate(false);
    setError("");
  };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setFormData({
      ...formData,
      startDate: moment(start).format("YYYY-MM-DD"),
      startTime: moment(start).format("HH:mm"),
    });
    setIsModalOpen(true);
    setIsUpdate(false);
    setError("");
  };

  const handleEventSelect = (event) => {
    setFormData({
      title: event.title,
      agenda: event.agenda,
      startDate: moment(event.start).format("YYYY-MM-DD"),
      startTime: moment(event.start).format("HH:mm"),
      attendees: event.attendees || "",
      location: event.location || "",
      recurrence: event.recurrence || "Does not repeat",
    });
    setSelectedSlot({ start: event.start, end: event.end });
    setIsModalOpen(true);
    setIsUpdate(true);
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const start = new Date(`${formData.startDate}T${formData.startTime}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const hasConflict = events.some(
      (event) =>
        moment(event.start).isSame(start, "minute") &&
        (!isUpdate || (isUpdate && selectedSlot.start !== event.start))
    );

    if (hasConflict) {
      setError("This slot is already booked!");
      return;
    }

    const newEvent = {
      title: formData.title,
      agenda: formData.agenda,
      start: start,
      end: end,
      attendees: formData.attendees,
      location: formData.location,
      recurrence: formData.recurrence,
    };

    if (isUpdate) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.start === selectedSlot.start ? newEvent : event
        )
      );
    } else {
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }

    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">
        React Big Calendar Booking System
      </h1>
      <button
        onClick={openNewBookingModal}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        New Booking
      </button>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleEventSelect}
      />

      {/* Tailwind Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 transform transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">
              {isUpdate ? "Update Meeting" : "Schedule New Meeting"}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Agenda</label>
                <textarea
                  value={formData.agenda}
                  onChange={(e) =>
                    setFormData({ ...formData, agenda: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Start Time</label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) =>
                    setFormData({ ...formData, startTime: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Attendees</label>
                <input
                  type="text"
                  value={formData.attendees}
                  onChange={(e) =>
                    setFormData({ ...formData, attendees: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter attendees, separated by commas"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Recurrence</label>
                <select
                  value={formData.recurrence}
                  onChange={(e) =>
                    setFormData({ ...formData, recurrence: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                >
                  <option value="Does not repeat">Does not repeat</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  {isUpdate ? "Update Meeting" : "Add Meeting"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CalendarComp;
