'use client'

import { useState } from 'react'
import Image from 'next/image'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

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
              <Image src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-10 h-10 rounded-full border-2 border-white" width={40} height={40} />
              <Image src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYWxlfGVufDB8fDB8fHww" alt="" className="w-10 h-10 rounded-full border-2 border-white" width={40} height={40} />
              <Image src="https://plus.unsplash.com/premium_photo-1664702602915-235453b22b3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYWxlJTIwc2hvcCUyMG93bmVyfGVufDB8fDB8fHww" alt="" className="w-10 h-10 rounded-full border-2 border-white" width={40} height={40} />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-sm">
                +5
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get Started</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">Message sent successfully!</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-400"
                >
                  {loading ? 'Sending...' : 'Request Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

