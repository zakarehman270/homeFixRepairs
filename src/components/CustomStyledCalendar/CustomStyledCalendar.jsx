// src/components/Calendar.js
import React, { useState } from "react";
function CustomStyledCalendar() {
	const currentDate = new Date();
	const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
	const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

	const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
	const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const renderDaysOfWeek = () => {
		return days.map((day, index) => (
			<div key={index} className="calendar-header-day">
				{day}
			</div>
		));
	};

	const renderCalendarDays = () => {
		const daysArray = [];

		for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
			if (i > firstDayOfMonth) {
				daysArray.push(i - firstDayOfMonth);
			} else {
				daysArray.push("");
			}
		}

		const totalCells = 42; // 6 rows x 7 days
		const emptyCells = totalCells - daysArray.length;

		for (let i = 0; i < emptyCells; i++) {
			daysArray.push("");
		}

		return daysArray.map((day, index) => (
			<div key={index} className={`calendar-day ${day === "" ? "empty" : ""}`}>
				{day}
			</div>
		));
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(parseInt(e.target.value));
	};

	const handleYearChange = (e) => {
		setSelectedYear(parseInt(e.target.value));
	};

	return (
		<div className="calendar">
			<div className="calendar-header">
				<select value={selectedMonth} onChange={handleMonthChange}>
					{Array.from({ length: 12 }, (_, i) => (
						<option key={i} value={i}>
							{new Date(selectedYear, i).toLocaleString("en-US", {
								month: "long",
							})}
						</option>
					))}
				</select>
				<select value={selectedYear} onChange={handleYearChange}>
					{Array.from({ length: 10 }, (_, i) => (
						<option key={i} value={currentDate.getFullYear() - 5 + i}>
							{currentDate.getFullYear() - 5 + i}
						</option>
					))}
				</select>
			</div>
			<div className="calendar-days-of-week">{renderDaysOfWeek()}</div>
			<div className="calendar-days">{renderCalendarDays()}</div>
		</div>
	);
}
export default CustomStyledCalendar;
