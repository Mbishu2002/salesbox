'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Currency, Server, CreditCard, Car, Laptop } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownload = async () => {
    try {
      // Get the download URL that forces attachment disposition
      window.location.href = 'https://xkpjkhcrhrp7wfwe.public.blob.vercel-storage.com/SaleBox-Setup-0.1.0-mj1eqdJYY7cQ72NdOB3RAz1wd3Ciqs.exe?download=1';
    } catch (error) {
      console.error('Error initiating download:', error);
      alert('Failed to start download. Please try again or contact support.');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 sm:pt-20 pb-16 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-blue-600 text-sm sm:text-base font-medium mb-4 sm:mb-6 border border-blue-100">
              <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-blue-500"></span>
              </span>
              New: Offline Mode Available
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Sales Made Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Business Made Smarter
              </span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-[540px] mx-auto lg:mx-0">
              Streamline your sales and inventory management with cutting-edge tools designed to help you track, sell, and grow your business operations.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-200 text-sm sm:text-lg font-medium group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* <button 
                className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-4 text-gray-700 hover:text-gray-900 text-sm sm:text-lg font-medium group"
                onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" />
                Watch Demo
              </button> */}
              
              <button
                onClick={handleDownload}
                className="flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full transition-all transform hover:scale-105 text-sm sm:text-lg font-medium"
              >
                Download Desktop App
              </button>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10">
              <Image
                src="/resources/heroimage.png"
                alt="SalesBox Dashboard"
                width={800}
                height={600}
                className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              
              {/* Floating stats card */}
              <div className="absolute -left-4 sm:-left-8 -bottom-4 sm:-bottom-8 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 rotate-45" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Monthly Growth</p>
                    <p className="text-sm sm:text-xl font-bold text-gray-900">+28.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className={`mt-12 sm:mt-20 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8">Trusted by Leading Businesses</p>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 items-center justify-center">
            {[
              { name: 'Unilever', Icon: Shield },
              { name: 'Binance', Icon: Currency },
              { name: 'IBM REDBOOM', Icon: Server },
              { name: 'Mastercard', Icon: CreditCard },
              { name: 'Volkswagen', Icon: Car },
              { name: 'Microsoft', Icon: Laptop }
            ].map(({ name, Icon }, i) => (
              <div 
                key={i} 
                className="text-gray-400 hover:text-blue-600 transition-colors flex flex-col items-center group"
              >
                <Icon 
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 p-1.5 sm:p-2 transform group-hover:scale-110 transition-transform" 
                  strokeWidth={1} 
                />
                <span className="sr-only">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

