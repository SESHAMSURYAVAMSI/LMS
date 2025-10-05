"use client";
import Image from "next/image";
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string; // "startDate - endDate"
  location: string;
  videos: number;
  image: string;
}

interface EventCardProps {
  event: Event;
  onRegister?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  const [startDate, endDate] = event.date.split(" - ");

  return (
    <div className="flex items-center gap-4  rounded-lg p-4 shadow-sm bg-white">
      {/* Event Image */}
      <Image
        src={event.image}
        alt={event.title}
        width={100}
        height={100}
        className="rounded"
      />

      {/* Event Info */}
      <div className="flex-1">
        <h2 className="text-lg font-bold text-blue-900">{event.title}</h2>
        <p className="text-gray-600">📅 {startDate} - {endDate}</p>
        <p className="text-gray-600">📍 {event.location}</p>
        <p className="text-gray-600">🎥 {event.videos} recorded videos</p>
      </div>

      {/* Register Button */}
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        onClick={onRegister}
      >
        Register Now
      </button>
    </div>
  );
};

export default EventCard;
