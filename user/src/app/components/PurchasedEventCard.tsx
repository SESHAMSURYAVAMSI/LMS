"use client";

import { CalendarDays, MapPin, Video } from "lucide-react";
import { useRouter } from "next/navigation";

interface PurchasedEventCardProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  videos: number;
  purchasedOn: string;
  image: string;
}

export default function PurchasedEventCard({
  id,
  name,
  startDate,
  endDate,
  location,
  videos,
  purchasedOn,
  image,
}: PurchasedEventCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/purchased-events/${id}`);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg bg-gray-100 object-cover"
        />

        <div>
          <h2
            onClick={handleClick}
            className="text-lg font-semibold text-blue-700 cursor-pointer hover:underline"
          >
            {name}
          </h2>

          <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
            <CalendarDays className="w-4 h-4" />
            {startDate} - {endDate}
          </p>

          <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" />
            {location}
          </p>

          <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
            <Video className="w-4 h-4" />
            {videos} recorded videos
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right">
        <p className="text-xs text-gray-500 mb-2">
          Purchased on {purchasedOn}
        </p>
        <button
          onClick={handleClick}
          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          View Event
        </button>
      </div>
    </div>
  );
}
