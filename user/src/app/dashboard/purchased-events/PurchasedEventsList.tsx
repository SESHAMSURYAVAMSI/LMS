"use client";

import PurchasedEventCard from "@components/PurchasedEventCard";

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

interface Props {
  events: Event[];
}

export default function PurchasedEventsList({ events }: Props) {
  if (events.length === 0)
    return <p className="text-center text-gray-500 mt-10">No events found.</p>;

  return (
    <div className="space-y-4 mt-4">
      {events.map((event) => (
        <PurchasedEventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
