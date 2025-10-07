"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function PurchasedEventDetailPage() {
  // const params = useParams();
  // const { id } = params;
  const { eventId } = useParams();

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">{eventId}</h1>
      <p className="text-gray-700">
        This is the event detail page. We’ll add full content later.
      </p>
      <Link
        href="/purchased-events"
        className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Back to Events
      </Link>
    </div>
  );
}
