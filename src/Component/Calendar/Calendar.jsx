import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { VideoCameraIcon } from "@heroicons/react/outline"; // Importing the video icon
import NewMeetModal from "./NewMeetModal";
import CalendarButton from "./CalendarButton";
import LogoHeader from "../utilis/LogoHeader";

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

  // Handle Input Chagne
  const handleChange = (e, field) => {
    // setFormData({ ...formData, field: e.target.value });
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Calendar Logo */}
      <LogoHeader text="Calendar" />
      {/* New Meet Buttons */}
      <CalendarButton openNewBookingModal={openNewBookingModal} />
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        components={{
          toolbar: null, // Use the custom toolbar
        }}
        defaultView={Views.WEEK}
        endAccessor="end"
        style={{ height: 650 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleEventSelect}
      />

      {/* Tailwind Modal */}
      {isModalOpen && (
        <NewMeetModal
          isUpdate={isUpdate}
          handleFormSubmit={handleFormSubmit}
          formData={formData}
          handleChange={handleChange}
          error={error}
          handleOpenModal={handleOpenModal}
        />
      )}
    </>
  );
}

export default CalendarComp;
