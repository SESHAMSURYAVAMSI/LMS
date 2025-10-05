"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string; // "startDate - endDate"
  location: string;
  videos: number;
  image: string;
  slug?: string; // <-- add this for dynamic navigation
}

interface EventCardProps {
  event: Event;
  onRegister?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  const [startDate, endDate] = event.date.split(" - ");

  return (
    <div className="flex items-center gap-4 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-all">
      {/* Image */}
      <Link href={`/events/${event.slug || event.id}`} className="flex-shrink-0">
      
        <Image
          src={event.image}
          alt={event.title}
          width={100}
          height={100}
          className="rounded cursor-pointer"
        />
      </Link>

      {/* Info Section */}
      <div className="flex-1">
        <Link href={`/events/${event.slug || event.id}`}>
          <h2 className="text-lg font-bold text-blue-900 hover:underline cursor-pointer">
            {event.title}
          </h2>
        </Link>

        <p className="text-gray-600">
          📅 {startDate} – {endDate}
        </p>
        <p className="text-gray-600">📍 {event.location}</p>
        <p className="text-gray-600">🎥 {event.videos} recorded videos</p>
      </div>

      {/* Register Button */}
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 whitespace-nowrap"
        onClick={onRegister}
      >
        Register Now
      </button>
    </div>
  );
};

export default EventCard;
