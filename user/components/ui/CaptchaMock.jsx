"use client";
import { AiOutlineReload } from "react-icons/ai";

export default function CaptchaMock() {
  return (
    <div className="w-full max-w-sm border border-gray-300 rounded shadow-sm bg-white p-3 flex items-center justify-between">
      {/* Left: checkbox + text */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="captcha"
          className="w-5 h-5 border-gray-400 rounded"
        />
        <label htmlFor="captcha" className="text-gray-800 text-sm font-medium">
          I&apos;m not a robot
        </label>
      </div>

      {/* Right: icon + text */}
      <div className="flex flex-col items-center">
        <AiOutlineReload className="text-blue-600 w-6 h-6" />
        <span className="text-[10px] text-gray-500 leading-tight">reCAPTCHA</span>
        <div className="flex gap-1 text-[9px] text-blue-600">
          <a href="#" className="hover:underline">Privacy</a>
          <span>-</span>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
}
