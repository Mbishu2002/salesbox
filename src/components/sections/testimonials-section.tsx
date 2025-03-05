'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Claire Ngo',
    role: 'Pharmacy Chain Owner',
    content: '"With Salesbox, we reduced medication stockouts by 75% across our 12 locations in Yaoundé. The inventory alerts are lifesavers!"',
    image: 'https://plus.unsplash.com/premium_photo-1682129951679-c56d2f87db06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwcGhhcm1hY2lzdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Emmanuel Mbakop',
    role: 'Textile Manufacturing CEO',
    content: '"Our export documentation time dropped from 3 days to 4 hours using Salesbox. Now we ship to 8 Central African countries weekly."',
    image: 'https://th.bing.com/th/id/OIP.YvceHSfMGLC4te56FPOdNQHaFz?w=241&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Arnold Enow',
    role: 'Farmer',
    content: '"Tracking produce from Bamenda farms to Douala port became seamless. We\'ve increased shipments by 40% this quarter."',
    image: 'https://plus.unsplash.com/premium_photo-1678344151150-4a42c45453d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QkxBQ0slMjBGQVJNRVJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Marcelline Eteme',
    role: 'Supplies Distributor',
    content: '"The financial reports helped us secure a 50 million FCFA loan to expand across Littoral Region. Game changer!"',
    image: 'https://th.bing.com/th/id/OIP.aOaZqL9JpSeaODS_VqrGkwHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Didier Ndifor',
    role: 'Transport Logistics Owner',
    content: '"Route optimization features cut our fuel costs by 30% on Douala-Bafoussam corridor. Essential for any Cameroonian business."',
    image: 'https://th.bing.com/th/id/OIP.r8i7R7UAvTGPAsxngf9ScAHaFo?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Customer Success Stories</h2>
          <p className="text-gray-400">See how businesses are transforming their operations</p>
        </div>

        <div className="relative">
          {/* Mobile view - Single testimonial */}
          <div className="md:hidden">
            <div className="bg-[#0F172A] rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-300 mb-6">{testimonials[currentIndex].content}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#2B82FE] flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={48}
                    height={48}
                    className="object-cover aspect-square"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Mobile navigation buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prev}
                className="p-2 bg-[#0F172A] rounded-full hover:bg-blue-500/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={next}
                className="p-2 bg-[#0F172A] rounded-full hover:bg-blue-500/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Desktop view - Carousel */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4 md:px-8"
                  >
                    <div className="bg-[#0F172A] rounded-xl p-8">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 mb-6">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#2B82FE] flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover aspect-square"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#0F172A] rounded-full hover:bg-blue-500/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#0F172A] rounded-full hover:bg-blue-500/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

