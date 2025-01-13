import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { useGetEventQuery, useGetResourceQuery } from "../redux/api";

export default function Dashboard() {
  const { data: eventData, error: eventError, isLoading: eventIsLoading, isError: eventIsError } = useGetEventQuery();
  // Fetch resource data
  const { data: resourceData, error: resourceError, isLoading: resourceIsLoading, isError: resourceIsError } = useGetResourceQuery();
  return (
    <div className="p-5">
      <FullCalendar
        plugins={[dayGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay" // Use time grid view with resources
        weekends={false} // Optionally, hide weekends
        events={eventData ? eventData?.events : []}
        resources={resourceData? resourceData?.resources : [ ]}
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
