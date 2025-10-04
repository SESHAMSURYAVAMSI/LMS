"use client";
import Image from "next/image";

type Event = {
  name: string;
  date: string;
  location: string;
  videos: number;
};

import React from "react";

interface EventCardProps {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  videosCount: number;
  onRegister: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  startDate,
  endDate,
  location,
  videosCount,
  onRegister,
}) => (
  <div className="bg-white rounded shadow p-4 flex flex-col gap-2">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>
      {startDate} - {endDate} | {location}
    </p>
    <p>Videos: {videosCount}</p>
    <button
      className="mt-2 px-4 py-2 bg-sky-600 text-white rounded"
      onClick={onRegister}
    >
      Register
    </button>
  </div>
);

export default EventCard;
