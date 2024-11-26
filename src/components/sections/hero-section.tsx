import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-[#2D3748]">
              Sales Made Simple,{' '}
              <span className="block">Business Made</span>
              <span className="block">Smarter</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-[480px]">
              Streamline your sales and inventory management with cutting-edge tools designed to help you track, sell, and grow your business operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center px-8 py-3 bg-[#2B82FE] text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Try Free Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="flex items-center justify-center px-6 py-3 text-gray-700 hover:text-gray-900 text-sm font-medium">
                <Play className="mr-2 h-4 w-4 text-[#2B82FE]" fill="currentColor" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/resources/heroimage.png"
              alt="SalesBox Dashboard"
              width={800}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">More than 25,000 Businesses Trust Salesbox</p>
          <div className="grid grid-cols-6 gap-8 items-center justify-center">
            {['Unilever', 'Binance', 'IBM REDBOOM', 'Mastercard', 'Volkswagen', 'Microsoft'].map((company, i) => (
              <div key={i} className="text-gray-400 text-sm font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

