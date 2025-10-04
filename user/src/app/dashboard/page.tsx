"use client";

// Make sure Navbar.tsx exists in ./components or update the path accordingly
// Update the import path below if Navbar is located elsewhere
import Navbar from "@/components/common/Navbar";
import EventCard from "@/components/ui/EventCard";

export default function DashboardPage() {
  const events = [
    {
      title: "FUSICON 2026",
      startDate: "2026-04-17",
      endDate: "2026-04-18",
      location: "Kolkata",
      videosCount: 12,
    },
    {
      title: "PUSICON 2026",
      startDate: "2026-04-23",
      endDate: "2026-04-25",
      location: "Ranchi",
      videosCount: 12,
    },
    {
      title: "ANDROCON 2026",
      startDate: "2026-05-02",
      endDate: "2026-05-03",
      location: "Hyderabad",
      videosCount: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5faff]">
      <Navbar />
      <main className="max-w-5xl mx-auto py-8 px-4 space-y-6">
        <h1 className="text-2xl font-semibold text-sky-900">Upcoming Events</h1>
        {events.map((event, idx) => (
          <EventCard
            key={idx}
            {...event}
            onRegister={() => alert(`Registered for ${event.title}`)}
          />
        ))}
      </main>
    </div>
  );
}
