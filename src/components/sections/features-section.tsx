import Image from 'next/image'
import { Activity, Clock, BarChart3, MessageCircle, CheckCircle2 } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-8 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#2D3748] max-w-md leading-tight">
              Everything You Need To Manage Your Business
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-[400px]">
              Track inventory, monitor finances, analyze customer interactions, and optimize operations through integrated business intelligence tools
            </p>
          </div>
          <button className="bg-[#2B82FE] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium whitespace-nowrap self-start lg:self-center mt-2 lg:mt-0">
            Start Managing Today
          </button>
        </div>

        {/* Dashboard Section with Floating Cards */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16 max-w-5xl mx-auto">
          {/* Main Dashboard Image */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#1A94D0]">
            <Image
              src="/resources/DashBOARD (3).png"
              alt="Dashboard Features"
              width={700}
              height={394}
              className="w-full"
              priority
            />
          </div>

          {/* Floating cards - Hidden on small screens, visible on medium and up */}
          <div className="hidden md:block">
            {/* Left Floating Card - Profile */}
            <div className="absolute -left-4 sm:-left-8 bottom-[55px] bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 animate-float">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Amanda Young</h4>
                <p className="text-xs sm:text-sm text-gray-500">Expert Saving Money</p>
              </div>
              <div className="ml-2 sm:ml-4 bg-blue-50 p-1.5 sm:p-2 rounded-full">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              </div>
            </div>

            {/* Right Floating Card - Success Message */}
            <div className="absolute -right-4 sm:-right-8 bottom-[85px] bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 animate-float animation-delay-2000">
              <div className="bg-green-50 p-1.5 sm:p-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm sm:text-base">Money Transfer Successful</p>
                <p className="text-xs sm:text-sm text-gray-500">245.00 FCFA</p>
              </div>
            </div>

            {/* Top Right Stats Card */}
            <div className="absolute -right-8 sm:-right-16 lg:-right-36 top-6 bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-3 sm:p-4 animate-float animation-delay-4000">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-1.5 sm:p-2 rounded-full">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Total Sales</p>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">12,345 FCFA</p>
                </div>
              </div>
            </div>

            {/* Top Left Stats Card */}
            <div className="absolute -left-2 sm:-left-3 top-12 bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-3 sm:p-4 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-1.5 sm:p-2 rounded-full">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Active Customers</p>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">1,234</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 sm:mt-20">
          {/* Feature Item 1 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div className="bg-blue-50 p-2.5 sm:p-3 rounded-lg h-fit self-start">
              <Activity className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Real-Time Inventory Tracking</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Track inventory levels in real-time while monitoring business finances, customer interactions, 
                and key performance indicators through integrated dashboards and reports
              </p>
            </div>
          </div>
          
          {/* Feature Item 2 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div className="bg-green-50 p-2.5 sm:p-3 rounded-lg h-fit self-start">
              <BarChart3 className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Advanced Analytics</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Gain insights into your business performance with advanced analytics tools that help you 
                make data-driven decisions and identify growth opportunities
              </p>
            </div>
          </div>
          
          {/* Feature Item 3 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div className="bg-purple-50 p-2.5 sm:p-3 rounded-lg h-fit self-start">
              <MessageCircle className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Customer Relationship Management</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Build stronger relationships with your customers by tracking interactions, managing 
                communications, and personalizing your approach to each client
              </p>
            </div>
          </div>
          
          {/* Feature Item 4 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div className="bg-orange-50 p-2.5 sm:p-3 rounded-lg h-fit self-start">
              <Clock className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Time-Saving Automation</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Automate repetitive tasks and streamline workflows to save time and reduce errors, 
                allowing you to focus on growing your business instead of administrative work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



