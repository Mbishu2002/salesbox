'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: '"It was a great experience using SalesBox! The interface is intuitive and the features are exactly what we needed."',
    image: '/testimonial1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    content: '"The seamless offline and online sync capability has made our operations much more efficient. We can now work from anywhere without worrying about connectivity issues."',
    image: '/testimonial2.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Sales Director',
    content: '"The detailed sales reports have given us valuable insights into our business performance. We can now make data-driven decisions with confidence."',
    image: '/testimonial3.jpg',
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
    <section className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our User Kind Words</h2>
          <p className="text-gray-400">Here's what our customers have to say about their experience</p>
        </div>

        <div className="relative">
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
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
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

