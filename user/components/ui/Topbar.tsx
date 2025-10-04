"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-50 p-4 shadow">
      <h1 className="text-lg font-semibold text-gray-700">Dashboard / All Events</h1>
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border"
        />
        <button
          onClick={handleLogout}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
