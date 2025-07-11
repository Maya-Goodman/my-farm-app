import {
  ArrowRight,
  Leaf,
  ShoppingCart,
  Smartphone,
  Globe,
  Zap,
  Award,
  Star,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                AgriLink
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#platform"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                Platform
              </Link>
              <Link
                href="#farmers"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                Farmers
              </Link>
              <Link
                href="#buyers"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                Buyers
              </Link>
              <Link
                href="#stories"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                Stories
              </Link>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                  Login
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border border-green-500/30 text-lg mb-8">
              🚀 The Future of Local Agriculture
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                GROW.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                CONNECT.
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                THRIVE.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              The revolutionary platform connecting local farmers with conscious
              consumers.
              <br />
              <span className="text-green-400 font-semibold">
                Sell smarter.
              </span>{" "}
              <span className="text-blue-400 font-semibold">Buy fresher.</span>{" "}
              <span className="text-white font-semibold">Live better.</span>
            </p>
          </div>

          {/* Split Hero Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Farmer Side */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900/50 border border-green-500/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 p-8 rounded-3xl">
                <div className="text-center pb-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">
                    I GROW FOOD
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Transform your harvest into a thriving digital business
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-gray-200">
                        Sell directly to consumers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-gray-200">Set your own prices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-gray-200">
                        Build your brand story
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-gray-200">
                        Real-time inventory management
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-6 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center">
                    START SELLING NOW
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-green-400/70 text-sm">
                    Join 2,500+ farmers already earning more
                  </p>
                </div>
              </div>
            </div>

            {/* Buyer Side */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900/50 border border-blue-500/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 p-8 rounded-3xl">
                <div className="text-center pb-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-400 mb-4">
                    I BUY FRESH
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Discover the freshest local produce from nearby farms
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-200">
                        Farm-to-table freshness
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-200">Know your farmer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-200">
                        Support local economy
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-200">
                        Seasonal notifications
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg py-6 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center">
                    EXPLORE FARMS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-blue-400/70 text-sm">
                    Join 15,000+ conscious consumers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                2,500+
              </div>
              <div className="text-gray-400">Active Farmers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                15K+
              </div>
              <div className="text-gray-400">Happy Buyers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                $2.5M+
              </div>
              <div className="text-gray-400">Farmer Revenue</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-400">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Built for the
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Digital Age
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets traditional farming. Experience the
              future of local agriculture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">
                Mobile First
              </h3>
              <p className="text-gray-400 text-lg">
                Manage your farm business from anywhere with our intuitive
                mobile app
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">
                Hyper Local
              </h3>
              <p className="text-gray-400 text-lg">
                Advanced location matching connects you with your immediate
                community
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group rounded-xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">Real-Time</h3>
              <p className="text-gray-400 text-lg">
                Instant notifications, live inventory updates, and immediate
                order processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section
        id="stories"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Real Stories,
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Farmer Story */}
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 border border-green-500/30 p-8 rounded-2xl">
              <div className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Maria Rodriguez"
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-green-500"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl text-green-400 font-bold">
                      Maria Rodriguez
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Organic Valley Farm • Top Seller 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-200 text-lg leading-relaxed">
                  "AgriLink transformed my small organic farm into a thriving
                  business. I went from struggling at weekend markets to having
                  a waitlist of customers. The platform is incredibly
                  intuitive."
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      300%
                    </div>
                    <div className="text-sm text-gray-400">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      500+
                    </div>
                    <div className="text-sm text-gray-400">
                      Regular Customers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      4.9★
                    </div>
                    <div className="text-sm text-gray-400">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyer Story */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 border border-blue-500/30 p-8 rounded-2xl">
              <div className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="David Kim"
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-blue-500"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl text-blue-400 font-bold">
                      David Kim
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Chef & Food Enthusiast • Community Champion
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-200 text-lg leading-relaxed">
                  "As a chef, ingredient quality is everything. AgriLink
                  connects me directly with local farmers who share my passion
                  for exceptional produce. The freshness is unmatched."
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">12</div>
                    <div className="text-sm text-gray-400">Local Farms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-gray-400">
                      Organic Sourcing
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      2 Days
                    </div>
                    <div className="text-sm text-gray-400">Farm to Table</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-blue-600/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the agricultural revolution. Whether you're growing or buying,
            your journey to fresher, more sustainable food starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-6 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center">
              <Leaf className="mr-2 h-5 w-5" />
              I'M A FARMER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              I'M A BUYER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-gray-400 mt-8 text-sm">
            Free to join • No setup fees • Start connecting in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  AgriLink
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Revolutionizing local agriculture through technology. Connecting
                farmers and consumers for a more sustainable future.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white p-3 rounded-xl transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white p-3 rounded-xl transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white p-3 rounded-xl transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Farmers</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/farmer-signup"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/farmer-resources"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/success-stories"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Buyers</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/browse"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Browse Farms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seasonal"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Seasonal Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} AgriLink. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/security"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
