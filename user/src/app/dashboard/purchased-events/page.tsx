"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiFilter } from "react-icons/fi";
import { CalendarDays, MapPin, Video } from "lucide-react";

const purchasedEvents = [
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
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Sort By");
  const [filterOpen, setFilterOpen] = useState(false);

  const options = ["Newest First", "Popularity"];

  // Filter + Sort logic
  let filteredEvents = purchasedEvents.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "Newest First") {
    filteredEvents = filteredEvents.sort(
      (a, b) =>
        new Date(b.purchasedOn).getTime() -
        new Date(a.purchasedOn).getTime()
    );
  } else if (sortBy === "Popularity") {
    filteredEvents = filteredEvents.sort((a, b) => b.videos - a.videos);
  }

  return (
    <div className="p-6 min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Purchased Events</h1>

      {/* Search + Sort Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1 w-60"
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

      {/* Event Cards */}
      <div className="space-y-4 mt-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={event.image}
                alt={event.name}
                className="w-24 h-24 rounded-lg bg-gray-100"
              />
              <div>
                <h2
                  onClick={() => router.push(`/purchased-events/${event.id}`)}
                  className="text-lg font-semibold text-blue-700 cursor-pointer hover:underline"
                >
                  {event.name}
                </h2>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <CalendarDays className="w-4 h-4" />
                  {event.startDate} - {event.endDate}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <Video className="w-4 h-4" />
                  {event.videos} recorded videos
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500 mb-2">
                Purchased on {event.purchasedOn}
              </p>
              <button
                onClick={() => router.push(`/purchased-events/${event.id}`)}
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                View Event
              </button>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No events found.
          </p>
        )}
      </div>
    </div>
  );
}
