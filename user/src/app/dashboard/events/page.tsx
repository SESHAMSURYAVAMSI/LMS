"use client";
import { useState } from "react";
import EventCard from "@/components/ui/EventCard";
import SortDropdown from "@/components/ui/SortDropdown";
import SearchBar from "@/components/ui/SearchBar";

const events = [
  {
    id: 1,
    name: "FUSICON 2026",
    date: "17 Apr 2026 - 18 Apr 2026",
    location: "Kolkata",
    videos: 12,
  },
  {
    id: 2,
    name: "PUSICON 2026",
    date: "23 Apr 2026 - 25 Apr 2026",
    location: "Ranchi",
    videos: 12,
  },
  {
    id: 3,
    name: "ANDROCON 2026",
    date: "2 May 2026 - 3 May 2026",
    location: "Hyderabad",
    videos: 12,
  },
];

export default function EventsPage() {
  const [sort, setSort] = useState("newest");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <SearchBar />
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          // Assuming event.date is in the format "17 Apr 2026 - 18 Apr 2026"
          const [startDate, endDate] = event.date.split(" - ");
          return (
            <EventCard
              key={event.id}
              title={event.name}
              location={event.location}
              startDate={startDate}
              endDate={endDate}
              videosCount={event.videos}
              onRegister={() => {
                // Implement registration logic here
                alert(`Registered for ${event.name}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
