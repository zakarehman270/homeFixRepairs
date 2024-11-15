import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

const resources = [
  { id: "1", title: "Qamar Javed Bab Al Qarya HM1 (5)" },
  { id: "2", title: "Asif Raza Shahani Bab Al Qarya HM1 (4.8)" },
  { id: "3", title: "Muhammad Bal Al Qarya HM1 (4.71)" },
  { id: "4", title: "Pervaiz Bab Al Qarya HM1 (4.71)" },
  { id: "5", title: "Soulat Abbas Bab Al Qarya HM1 (4.7)" },
  { id: "6", title: "Muhammad Jameel Bab Al Qarya HM1 (4.49)" },
  { id: "7", title: "Ahmad Sher Jan Bab Al Qarya HM1 (4.4)" },
];

const events = [
  { title: "Meeting", start: new Date(), resourceId: "1" },
  { title: "Lunch", start: new Date(), resourceId: "2" },
  { title: "Workshop", start: new Date(), resourceId: "3" },
  { title: "Conference", start: new Date(), resourceId: "4" },
];

export default function Dashboard() {
  return (
    <div className="p-5">
      <FullCalendar
        plugins={[dayGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay" // Use time grid view with resources
        weekends={false} // Optionally, hide weekends
        events={events}
        resources={resources}
        slotDuration="00:30:00" // Adjust slot duration (e.g., 30 minutes)
        slotLabelInterval="01:00" // Label interval for the time slots
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
        allDaySlot={false} // Disable the "All Day" row
      />
    </div>
  );
}
