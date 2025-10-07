"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user data
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    // Redirect to login
    router.push("/login");
  };

  return (
    <header className="w-full flex items-center justify-between bg-gradient-to-r from-[#d8eefe] to-[#f7fbff] px-6 py-3 shadow-sm">
      {/* Logo + Title
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="USI Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-lg font-semibold text-sky-900">
          Urological Society of India
        </h1>
      </div> */}

      {/* Right Section - Avatar + Logout */}
      <div className="flex items-center gap-4">
        <Image
          src="/user-avatar.png"
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full border border-gray-200"
        />
        <button
          onClick={handleLogout}
          className={cn(
            "px-4 py-2 rounded-lg text-white font-medium transition-colors",
            "bg-orange-500 hover:bg-orange-600"
          )}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
