"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, MapPin, Video } from "lucide-react";

interface Event {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  videos: number;
  purchasedOn: string;
  image: string;
}

export default function PurchasedEventCard({ event }: { event: Event }) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
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
          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          View Event
        </button>
      </div>
    </div>
  );
}
