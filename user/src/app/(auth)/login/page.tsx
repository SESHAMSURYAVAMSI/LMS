"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import CaptchaMock from "@/components/ui/CaptchaMock";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Fake authentication
    const validEmail = "test@example.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      setError(""); // clear error
      router.push("/dashboard"); // redirect
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f0faff] font-sans">
      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d0ebff] to-[#a9d6fb] font-sans">
        <div className="bg-[#f0faff] shadow-md rounded-2xl flex max-w-4xl w-full overflow-hidden">
          {/* Left side - form */}
          <div className="flex-1 p-10">
            <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Login</h2>

            <form className="flex flex-col space-y-5" onSubmit={handleLogin}>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>

              {/* Mock reCAPTCHA
              <CaptchaMock />

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )} */}
     {/* reCAPTCHA invisible */}
      <div>
        <label className="block text-label mb-2">reCAPTCHA</label>
        <ReCAPTCHA
          sitekey="your_site_key_here"
          onChange={(val) => console.log("captcha", val)}
        />
      </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-orange-500 font-semibold hover:underline"
              >
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
          <div className="absolute right-2 bottom-2 flex items-center gap-1 mr-2 mb-2">
            <span className="mr-1">Educational Grant By</span>
            <Image
              src="/sun_pharma.png"
              alt="Sun Pharma"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
