"use client";
import Image from "next/image";
import { MapPin, Video, Briefcase } from "lucide-react";
import type { Speaker } from "../../../types/Speaker"; // ✅ make sure this import path is correct

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const { name, institution, location, videos, image } = speaker;

  return (
    <div className="flex items-center gap-4 border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        className="rounded-full"
      />
      <div>
        <h3 className="text-[#F97316] font-semibold">{name}</h3>
        <p className="flex items-center gap-2 text-sm text-gray-700">
          <Briefcase size={16} /> {institution}
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin size={16} /> {location}
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-700">
          <Video size={16} /> {videos} Videos
        </p>
      </div>
    </div>
  );
}
