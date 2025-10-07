"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CalendarDays, MapPin, Video, Filter } from "lucide-react";

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
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Newest First");
  const router = useRouter();

  const filtered = purchasedEvents
    .filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Newest First") {
        return new Date(b.purchasedOn).getTime() - new Date(a.purchasedOn).getTime();
      }
      if (sortOption === "Popularity") {
        return b.videos - a.videos;
      }
      return 0;
    });

  const handleSortSelect = (option: string) => {
    setSortOption(option);
    setSortOpen(false);
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen">
      <div className="flex items-center justify-between relative">
        <h1 className="text-2xl font-semibold">Purchased Events</h1>
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 border border-orange-500 text-orange-500 font-medium px-4 py-2 rounded-md hover:bg-orange-50 transition"
          >
            <Filter className="w-4 h-4 text-orange-500" />
            <span>Sort By</span>
          </button>
          {sortOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-20">
              {["Newest First", "Popularity"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSortSelect(option)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    sortOption === option
                      ? "bg-orange-500 text-white font-medium"
                      : "text-gray-800 hover:bg-orange-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-1 w-full md:w-1/2"
      />

      <div className="space-y-4 mt-4">
        {filtered.map((event) => (
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
      </div>
    </div>
  );
}
