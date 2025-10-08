"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Helper to conditionally join classNames
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  { name: "Events", path: "/dashboard/events", icon: "/icons/events.png" },
  { name: "Registered Events", path: "/dashboard/purchased-events", icon: "/icons/purchased-events.png" },
  { name: "Speakers", path: "/dashboard/speakers", icon: "/icons/speaker.png" },
  { name: "My Profile", path: "/dashboard/profile", icon: "/icons/my-profile.png" },
  { name: "My Purchases", path: "/dashboard/purchases", icon: "/icons/my-purchases.png" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col min-h-screen">
      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition-colors",
              pathname === item.path && "bg-orange-500 text-white"
            )}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="object-contain"
            />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer / Sponsored By */}
      <div className="p-4 text-xs text-gray-500 flex flex-col items-center text-center border-t">
        <span>Educational Grant By</span>
        <Image
          src="/sun_pharma.png"
          alt="Sun Pharma"
          width={50}
          height={50}
          className="mt-2"
        />
      </div>
    </aside>
  );
}
