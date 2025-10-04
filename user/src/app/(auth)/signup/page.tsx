"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignupPage() {
  const [prefix, setPrefix] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const router = useRouter();
  const recaptchaRef: ReCAPTCHA | null = null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept Terms & Conditions before signing up.");
      return;
    }

    // // Execute invisible reCAPTCHA
    // if (recaptchaRef) {
    //   const token = await recaptchaRef.executeAsync();
    //   console.log("Captcha token:", token);
    //   recaptchaRef.reset();
    // }

    // For now, redirect after "successful signup"
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d0ebff] to-[#a9d6fb] font-sans flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-start justify-center pt-20 pb-20">
        <div className="bg-[#f0faff] shadow-md rounded-2xl flex overflow-hidden">
          {/* Left side - form */}
          <div className="flex-1 p-10 overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Sign Up</h2>

            <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="prefix" className="text-gray-700 font-medium">
                  Prefix
                </label>
                <input
                  id="prefix"
                  type="text"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  placeholder="Eg: Dr, Mr, Ms"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fullname" className="text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mobile" className="text-gray-700 font-medium">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="country" className="text-gray-700 font-medium">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                />
              </div>

              {/* reCAPTCHA invisible */}
      <div>
        <label className="block text-label mb-2">reCAPTCHA</label>
        <ReCAPTCHA
          sitekey="your_site_key_here"
          onChange={(val) => console.log("captcha", val)}
        />
      </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to all{" "}
                  <span className="text-orange-500">Terms & Conditions</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
              >
                Sign Up
              </button>
            </form>

            {/* Already have an account? */}
            <p className="text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-500 font-semibold hover:underline"
              >
                Login now
              </Link>
            </p>
          </div>

          {/* Right side - illustration */}
          {/* <div className="flex-1 flex items-center justify-center bg-[#f9fcff] relative">
            <Image
              src="/signup.jpg"
              alt="Illustration"
              fill
              className="object-contain p-6"
              priority
            />
          </div> */}
          <div className="flex-1 flex items-center justify-center bg-[#f9fcff] ">
            <Image src="/signup.jpg" alt="Illustration" 
            width={400} height={400}
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
