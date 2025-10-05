"use client";
import EventCard from "./EventCard";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "FUSICON 2026",
    date: "17 Apr 2026 - 18 Apr 2026",
    location: "Kolkata",
    videos: 12,
    image: "/event-logo.png",
  },
  {
    id: 2,
    title: "PUSICON 2026",
    date: "23 Apr 2026 - 25 Apr 2026",
    location: "Ranchi",
    videos: 12,
    image: "/event-logo.png",
  },
  {
    id: 3,
    title: "ANDROCON 2026",
    date: "2 May 2026 - 3 May 2026",
    location: "Hyderabad",
    videos: 12,
    image: "/event-logo.png",
  },
];

export default function EventList() {
  const [sortBy, setSortBy] = useState("Sort By");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const options = ["Newest First", "Popularity"];

  // Simple search + sort (newest first = by id descending)
  let filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "Newest First") {
    filteredEvents = filteredEvents.sort((a, b) => b.id - a.id);
  } else if (sortBy === "Popularity") {
    filteredEvents = filteredEvents.sort((a, b) => b.videos - a.videos);
  }

  return (
    <div>
      {/* Search and Sort */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1 w-100"
        />

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-1 border border-orange-500 rounded px-3 py-1 text-orange-500
                      bg-white hover:bg-orange-50 focus:bg-orange-500 focus:text-white focus:outline-none"
          >
            <FiFilter size={18} />
            <span>{sortBy}</span>
          </button>

          {filterOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              {options.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-orange-500 cursor-pointer"
                  onClick={() => {
                    setSortBy(option);
                    setFilterOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Events */}
      <div className="flex flex-col gap-4">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={() => console.log(`Register for ${event.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
