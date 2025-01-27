import React, { useState, useMemo } from "react";
import "./Calendar.css"; // We will define the styles in this CSS file

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay();

    const calendarDays = [];

    // Fill the empty slots before the 1st day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Fill in the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    // Fill the empty slots after the last day of the month
    while (calendarDays.length < 42) {
      calendarDays.push(null);
    }

    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDate = (day) => {
    if (day) {
      setSelectedDate(new Date(year, month, day));
    }
  };

  const calendarDays = useMemo(() => generateCalendar(), [year, month]);

  return (
    <div>
      <div className="calendar-container">
        <header className="calendar-header">
          <button
            className="nav-button"
            onClick={handlePrevMonth}
            aria-label="Previous Month"
          >
            &lt;
          </button>
          <h2>
            {monthNames[month]} {year}
          </h2>
          <button
            className="nav-button"
            onClick={handleNextMonth}
            aria-label="Next Month"
          >
            &gt;
          </button>
        </header>

        <table className="calendar-table">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {calendarDays
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((day, dayIndex) => (
                    <td
                      key={dayIndex}
                      className={`calendar-day ${
                        day === selectedDate?.getDate() ? "selected" : ""
                      } ${
                        day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear()
                          ? "today"
                          : ""
                      } ${day === null ? "disabled" : ""}`}
                      onClick={() => handleSelectDate(day)}
                    >
                      {day}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {selectedDate
            ? `Selected Date: ${selectedDate.toDateString()}`
            : "No date selected"}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
