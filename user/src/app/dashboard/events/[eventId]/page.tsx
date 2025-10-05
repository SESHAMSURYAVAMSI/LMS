"use client";

import { useRouter } from "next/navigation";
import { Calendar, MapPin, Video } from "lucide-react";

const eventData = {
  id: "fusicon-2026",
  title: "FUSICON 2026",
  date: "17 Apr 2026 - 18 Apr 2026",
  location: "Kolkata",
  videosCount: 12,
  sessions: [
    {
      id: 1,
      title: "Laparoscopy & Robotics I",
      videos: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur.",
          speaker: "R.V. Sudarshan",
          duration: "12:33",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur.",
          speaker: "Jaideep Mishra",
          duration: "12:33",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur.",
          speaker: "Dr Udit Jana",
          duration: "12:33",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur.",
          speaker: "R.V. Sudarshan",
          duration: "12:33",
        },
      ],
    },
  ],
};

export default function EventDetailsPage() {
  const router = useRouter();
  const event = eventData;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Header Section */}
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex gap-4 items-center">
            <img
              src="/event-logo.png"
              alt="Event Logo"
              className="w-20 h-20 rounded-xl bg-blue-200 p-2"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-700">
                {event.title}
              </h1>
              <div className="flex flex-col text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4" /> {event.videosCount} recorded videos
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Register functionality here")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition"
          >
            Register Now
          </button>
        </div>

        {/* Contents Summary */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Contents</h2>
          <p className="text-sm text-gray-600">
            3 Sessions • 12 Videos • 50 mins total length
          </p>

          <input
            type="text"
            placeholder="Search videos"
            className="mt-4 w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Session List */}
        <div className="mt-8 space-y-8">
          {event.sessions.map((session) => (
            <div key={session.id}>
              <h3 className="text-md font-semibold text-gray-700 mb-4">
                Session {session.id}: {session.title}
              </h3>

              <div className="space-y-4">
                {session.videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg hover:shadow-sm transition"
                  >
                    <div className="w-20 h-14 bg-black rounded-md flex items-center justify-center text-white">
                      ▶
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-600">
                        Speaker –{" "}
                        <span className="text-orange-500 font-medium">
                          {video.speaker}
                        </span>
                      </p>
                    </div>

                    <div className="text-xs text-gray-500">
                      Video – {video.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
