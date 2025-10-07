"use client";
import SpeakerCard from "@/components/SpeakerCard";
import { Speaker } from "../../../../types/Speaker";

interface SpeakersListProps {
  speakers: Speaker[];
}

export default function SpeakersList({ speakers }: SpeakersListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker} />
      ))}
    </div>
  );
}
