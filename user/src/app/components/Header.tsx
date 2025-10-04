"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-l from-blue-200 to-blue-800 p-4 shadow-md flex items-start">
      {/* <div className="flex items-center max-w-7xl mx-auto"> */}
        {/* Logo */}
        <Image
          src="/urological.png" // <- place your logo in /public/logo.png
          alt="Urological Society of India Logo"
          width={180}
          height={180}
          className="ml-4 mt-0"
        />

        {/* Title */}
        {/* <h1 className="text-xl font-bold text-blue-900">
          Urological Society of India
        </h1> */}
      {/* </div> */}
    </header>
  );
}
