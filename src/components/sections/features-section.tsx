import Image from 'next/image'
import { Activity, Clock, BarChart3, MessageCircle, CheckCircle2 } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Now in one line */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-32">
            <h2 className="text-[40px] font-bold text-[#2D3748]">
              Our Features
              <br />
              You Can Get
            </h2>
            <p className="text-gray-500 text-lg max-w-[400px]">
              We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily
            </p>
          </div>
          <button className="bg-[#2B82FE] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors text-base font-medium whitespace-nowrap">
            Get Started
          </button>
        </div>

        {/* Dashboard Section with Floating Cards */}
        <div className="relative w-full max-w-[700px] mx-auto mb-32">
          {/* Main Dashboard Image */}
          <div className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#1A94D0]">
            <Image
              src="/resources/DashBOARD (3).png"
              alt="Dashboard Features"
              width={700}
              height={394}
              className="w-full"
              priority
            />
          </div>

          {/* Left Floating Card - Profile */}
          <div className="absolute -left-8 bottom-[55px] bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-4 flex items-center gap-4 animate-float">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
              <Image
                src="/resources/profile-avatar.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Amanda Young</h4>
              <p className="text-sm text-gray-500">Expert Saving Money</p>
            </div>
            <div className="ml-4 bg-blue-50 p-2 rounded-full">
              <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
          </div>

          {/* Right Floating Card - Success Message */}
          <div className="absolute -right-32 bottom-[-25px] bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-4 flex items-center gap-3 animate-float-delayed">
            <div className="bg-green-50 p-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Money Transfer Successful</p>
              <p className="text-sm text-gray-500">$245.00</p>
            </div>
          </div>

          {/* Top Right Stats Card */}
          <div className="absolute -right-36 top-6 bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-4 animate-float">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-full">
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <p className="font-semibold text-gray-900">$12,345</p>
              </div>
            </div>
          </div>

          {/* Top Left Stats Card */}
          <div className="absolute -left-3 top-12 bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-4 animate-float-delayed">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-2 rounded-full">
                <Clock className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <p className="font-semibold text-gray-900">1,234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 mt-20">
          {/* Feature Items */}
          <div className="flex gap-6">
            <div className="bg-blue-50 p-3 rounded-lg h-fit">
              <Activity className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Real-Time Inventory Tracking</h3>
              <p className="text-gray-500 leading-relaxed">
                Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand
              </p>
            </div>
          </div>
          {/* Add other feature items here */}
        </div>
      </div>
    </section>
  )
}



