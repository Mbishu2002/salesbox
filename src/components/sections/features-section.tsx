import Image from 'next/image'
import { Activity, Clock, BarChart3 } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-[#2D3748]">
              Our Features
              <span className="block">You Can Get</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-[500px]">
              We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily
            </p>
          </div>
          <button className="bg-[#2B82FE] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="relative mb-20">
          <Image
            src="/resources/full.png"
            alt="Dashboard Features"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg"
            priority
          />
          
          {/* Profile Card Overlay */}
          <div className="absolute left-0 bottom-[-30px] bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <Image
              src="/resources/avatar.png"
              alt="Amanda Young"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold">Amanda Young</h4>
              <p className="text-sm text-gray-500">Expert Saving Money</p>
            </div>
            <div className="ml-4 bg-blue-100 p-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B82FE" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>

          {/* Money Transfer Success Card */}
          <div className="absolute right-8 bottom-[-20px] bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-medium">Money Transfer Successful</p>
              <p className="text-sm text-gray-500">$245.00</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-8 mt-32">
          <div className="space-y-12">
            {/* Left Column Features */}
            <div className="flex gap-6">
              <div className="bg-blue-50 p-3 rounded-lg h-fit">
                <Activity className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Inventory Tracking</h3>
                <p className="text-gray-500">Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-blue-50 p-3 rounded-lg h-fit">
                <Clock className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seamless Offline & Online Sync</h3>
                <p className="text-gray-500">Analyze your performance and create gorgeous report</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            {/* Right Column Features */}
            <div className="flex gap-6">
              <div className="bg-blue-50 p-3 rounded-lg h-fit">
                <Clock className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seamless Offline & Online Sync</h3>
                <p className="text-gray-500">Analyze your performance and create gorgeous report</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-blue-50 p-3 rounded-lg h-fit">
                <BarChart3 className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Detailed Sales Reports</h3>
                <p className="text-gray-500">Quickly navigate you and engage with your audience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



