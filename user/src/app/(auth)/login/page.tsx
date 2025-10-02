"use client";

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#dff1fb] to-[#dff1fb]">
      <div className="bg-white shadow-md rounded-2xl flex max-w-4xl w-full overflow-hidden">
        
        {/* Left side - form */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Login</h2>

          <form className="flex flex-col space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Email id"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <a
                href="#"
                className="text-sm text-orange-500 hover:underline mt-1 inline-block"
              >
                Forgot Password?
              </a>
            </div>

            {/* Captcha placeholder */}
            <div className="border rounded-lg p-3 flex items-center space-x-2">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha" className="text-gray-600">
                I’m not a robot
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Sign up now
            </a>
          </p>
        </div>

        {/* Right side - illustration */}
        <div className="flex-1 flex items-center justify-center bg-[#f9fcff]">
          <Image
            src="/login-illustration.png"
            alt="Login Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
