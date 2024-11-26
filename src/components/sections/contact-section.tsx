'use client'

import { useState } from 'react'

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              People are Saying
              <br />
              About SalesBox
            </h2>
            <p className="text-gray-600 mb-8">
              Everything you need to accept payments and grow your business anywhere on the planet.
            </p>
            <div className="flex -space-x-2">
              {/* User Avatars */}
              <img src="/avatar1.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
              <img src="/avatar2.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
              <img src="/avatar3.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-sm">
                +5
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get Started</h3>
            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

