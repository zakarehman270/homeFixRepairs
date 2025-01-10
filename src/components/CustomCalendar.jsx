import moment from "moment";
import React, { useState } from "react";

const CustomCalendar = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date(); // Get today's date

  const handleDateClick = (date) => {
    // Prevent clicking on disabled dates
    if (date.getTime() < today.setHours(0, 0, 0, 0)) {
      return;
    }
    setSelectedDate(date);
    setDate(moment(date).format("dddd, MMMM DD"));
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const days = [];

    // Fill in the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      const isDisabled = currentDate.getTime() < today.setHours(0, 0, 0, 0); // Disable past dates

      days.push(
        <div
          key={`current-${day}`}
          className={`calendar-day ${isDisabled ? "disabled" : ""} ${
            currentDate.getTime() === selectedDate.getTime() ? "selected" : ""
          }`}
          onClick={() => handleDateClick(currentDate)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button type="button" onClick={goToPreviousMonth}>&lt;</button>
        <h2 className="dateHeading">{formatMonthYear(selectedDate)}</h2>
        <button type="button" onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-days">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
      </div>
      <div className="calendar-grid">{renderDays()}</div>
    </div>
  );
};

export default CustomCalendar;
