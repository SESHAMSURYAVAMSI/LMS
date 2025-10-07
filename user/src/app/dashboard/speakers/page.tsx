"use client";

import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import SpeakersList from "./SpeakersList";

const speakersData = [
  {
    id: 1,
    name: "Dr. R.V. Sudarshan",
    institution: "AIIMS Delhi",
    location: "Chennai, Tamil Nadu",
    videos: 4,
    image: "/doctor.png",
  },
  {
    id: 2,
    name: "Dr. Anita Sharma",
    institution: "CMC Vellore",
    location: "Vellore, Tamil Nadu",
    videos: 8,
    image: "/doctor.png",
  },
  {
    id: 3,
    name: "Dr. Karan Rao",
    institution: "NIMS Hyderabad",
    location: "Hyderabad, Telangana",
    videos: 3,
    image: "/doctor.png",
  },
];

export default function SpeakersPage() {
  const [sortBy, setSortBy] = useState("Sort By");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const options = ["Newest First", "Popularity"];

  // Search + Sort logic
  let filteredSpeakers = speakersData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "Newest First") {
    filteredSpeakers = filteredSpeakers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "Popularity") {
    filteredSpeakers = filteredSpeakers.sort((a, b) => b.videos - a.videos);
  }

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Speakers</h1>

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

      {/* Speakers Grid */}
      <SpeakersList speakers={filteredSpeakers} />
    </div>
  );
}
