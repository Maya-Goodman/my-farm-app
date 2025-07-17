"use client";

import Link from "next/link";
import { Leaf, ArrowRight, Mail, Lock } from "lucide-react"; // Import Mail and Lock icons
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const dummyUsers = {
      "buyer@example.com": {
        password: "buyerpassword",
        redirect: "/buyerdashboard",
      },
      "farmer@example.com": {
        password: "farmerpassword",
        redirect: "/farmdashboard",
      },
      "company@example.com": {
        password: "companypassword",
        redirect: "/companydashboard",
      },
    };

    const user = dummyUsers[email];

    if (user && user.password === password) {
      console.log(`Logged in as ${email}. Redirecting to ${user.redirect}`);
      router.push(user.redirect);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/images/background4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/30 to-blue-900/20 z-0"></div>

      <div className="relative z-10 bg-gray-900/50 border border-gray-800 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-400 text-lg">
            Sign in to your AgriLink account.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              {" "}
              {/* Added relative positioning */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" /> {/* Mail Icon */}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pl-10" // Added pl-10 for padding
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              {" "}
              {/* Added relative positioning */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" /> {/* Lock Icon */}
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pl-10" // Added pl-10 for padding
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-400">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Forgot your password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-lg py-4 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center"
          >
            Sign In
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-green-400 hover:text-green-300 transition-colors"
          >
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}
