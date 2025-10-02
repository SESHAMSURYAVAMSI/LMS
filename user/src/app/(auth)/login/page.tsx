"use client";
import Image from "next/image";
import CaptchaMock from "@/components/ui/CaptchaMock"; // <-- import here

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f0faff] font-sans">
      
      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d0ebff] to-[#a9d6fb] font-sans">
        <div className="bg-[#f0faff] shadow-md rounded-2xl flex max-w-4xl w-full overflow-hidden">
          
          {/* Left side - form */}
          <div className="flex-1 p-10">
            <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Login</h2>
            <form className="flex flex-col space-y-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-semibold text-gray-700">
                 Email
                   </label>
              <input
                type="email"
                placeholder="Enter Email id"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
               </div>
               {/* Password Field */}
               <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-semibold text-gray-700">
                 Password
               </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              </div>
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>

              {/* Mock reCAPTCHA */}
              <CaptchaMock />

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
      <footer className="w-full relative bg-gradient-to-r from-[#d0ebff] to-[#a9d6fb]">
        <div className="max-w-6xl mx-auto flex justify-end items-center py-3 text-sm text-gray-600">
          <div className="absolute right-0 bottom-1 flex items-center gap-1 mr-2 mb-2">
            <span className="mr-1">Educational Grant By</span>
            <Image src="/sun_pharma.png" alt="Sun Pharma" width={40} height={40} className="object-contain" />
          </div>
        </div>
      </footer>
    </div>
  );
}
