"use client";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f0faff] font-sans">
      
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white shadow-md rounded-2xl flex max-w-4xl w-full overflow-hidden">
          
          {/* Left side - form */}
          <div className="flex-1 p-10">
            <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Login</h2>
            <form className="flex flex-col space-y-5">
              <input
                type="email"
                placeholder="Enter Email id"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>
              <div className="border rounded-lg p-3 flex items-center space-x-2">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha" className="text-gray-600">I’m not a robot</label>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
                Login
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a href="/signup" className="text-orange-500 font-semibold hover:underline">
                Sign up now
              </a>
            </p>
          </div>

          {/* Right side - illustration */}
          <div className="flex-1 flex items-center justify-center bg-[#f9fcff]">
            <Image
              src="/login_pic (2).jpg"
              alt="Login Illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-[#e6f5ff] to-[#f0faff]">
        <div className="max-w-6xl mx-auto flex justify-end items-end py-3 px-4 text-sm text-gray-600">
          <span className="ml-2 self-end">Educational Grant By</span>
          <Image src="/sun_pharma.png" alt="Sun Pharma" width={40} height={40} className="object-contain"/>
        </div>
      </footer>
    </div>
  );
}
