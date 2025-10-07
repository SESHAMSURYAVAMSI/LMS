"use client";

import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import PurchasedEventsList from "../purchased-events/PurchasedEventsList";

const purchasedEventsData = [
  {
    id: "fusicon-2026",
    name: "FUSICON 2026",
    startDate: "17 Apr 2026",
    endDate: "18 Apr 2026",
    location: "Kolkata",
    videos: 12,
    purchasedOn: "2 May 2025",
    image: "/event-logo.png",
  },
  {
    id: "pusicon-2026",
    name: "PUSICON 2026",
    startDate: "23 Apr 2026",
    endDate: "25 Apr 2026",
    location: "Ranchi",
    videos: 12,
    purchasedOn: "2 May 2025",
    image: "/event-logo.png",
  },
];

export default function PurchasedEventsPage() {
  const [sortBy, setSortBy] = useState("Sort By");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const options = ["Newest First", "Popularity"];

  // Search + Sort logic
  let filteredEvents = purchasedEventsData.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "Newest First") {
    filteredEvents = filteredEvents.sort(
      (a, b) => new Date(b.purchasedOn).getTime() - new Date(a.purchasedOn).getTime()
    );
  } else if (sortBy === "Popularity") {
    filteredEvents = filteredEvents.sort((a, b) => b.videos - a.videos);
  }

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Purchased Events</h1>

      {/* Search + Sort */}
      <div className="flex justify-between items-center mb-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1 w-100"
        />

        {/* Sort Dropdown */}
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
                  className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer"
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

      {/* Purchased Events List */}
      <PurchasedEventsList events={filteredEvents} />
    </div>
  );
}
