import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";

Modal.setAppElement("#root");

function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [meetings, setMeetings] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    agenda: "",
    time: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState("");

  // Handle modal open
  const handleNewMeeting = (date) => {
    setSelectedDate(date);
    setFormData({ title: "", agenda: "", time: "" });
    setIsModalOpen(true);
    setIsUpdate(false);
    setError("");
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const slot = `${selectedDate.toDateString()} ${formData.time}`;

    if (meetings[slot] && !isUpdate) {
      setError("This slot is already booked!");
      return;
    }

    setMeetings((prev) => ({
      ...prev,
      [slot]: { title: formData.title, agenda: formData.agenda },
    }));

    setIsModalOpen(false);
  };

  // Handle update for booked slot
  const handleSlotClick = (slot) => {
    setFormData(meetings[slot]);
    setSelectedDate(new Date(slot.split(" ")[0]));
    setIsModalOpen(true);
    setIsUpdate(true);
    setError("");
  };

  return (
    <div className="App">
      <h1>Calendar Booking System</h1>
      <Calendar
        onClickDay={handleNewMeeting}
        tileContent={({ date }) => {
          const slot = `${date.toDateString()} ${formData.time}`;
          return meetings[slot] ? (
            <div className="meeting-slot" onClick={() => handleSlotClick(slot)}>
              <strong>{meetings[slot].title}</strong>
              <p>{meetings[slot].agenda}</p>
            </div>
          ) : null;
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Schedule Meeting"
        className="Modal"
      >
        <h2>{isUpdate ? "Update Meeting" : "Schedule New Meeting"}</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Agenda</label>
            <textarea
              value={formData.agenda}
              onChange={(e) =>
                setFormData({ ...formData, agenda: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Time</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">
            {isUpdate ? "Update Meeting" : "Add Meeting"}
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Demo;
