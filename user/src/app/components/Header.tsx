"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // ✅ Here you can also clear tokens/session if needed
    router.push("/login"); // Redirect to login page
  };

  return (
    <header className="w-full bg-gradient-to-r from-blue-100 to-blue-200 p-4 shadow-md flex items-center justify-between">
      {/* Left section: Logo + Title */}
      <div className="flex items-center gap-4">
        <Image
          src="/urological.png" // Place your logo inside /public
          alt="Urological Society of India Logo"
          width={180}
          height={180}
          className="ml-2"
        />
        {/* <h1 className="text-lg font-bold text-blue-900">
          Urological Society of India
        </h1> */}
      </div>

      {/* Right section: Profile + Logout */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <Image
          src="/profile.jpeg" // Add a profile image in /public/profile.png
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border"
        />

        {/* Logout Button */}
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition">
          Logout
        </button>
      </div>
    </header>
  );
}
