'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const pricingData = {
  monthly: [
    {
      name: 'Premium',
      price: '10,000',
      features: [
        '5 Users',
        'Up to 10 Projects',
        'Up to 100 Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Basic Reports',
        'Admin Report App',
        'Sales Report App'
      ],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '15,000',
      features: [
        '25 Users',
        '50 Projects',
        'Unlimited Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Advanced Reports',
        'Admin Report App',
        'Sales Report App',
        'External Integration',
        'Priority Support'
      ],
      isPopular: true
    },
    {
      name: 'Business',
      price: '10,000',
      features: [
        'Unlimited Users',
        'Unlimited Projects',
        'Unlimited Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Custom Reports',
        'Admin Report App',
        'Sales Report App'
      ],
      isPopular: false
    }
  ],
  yearly: [
    {
      name: 'Premium',
      price: '100,000',
      features: [
        '5 Users',
        'Up to 10 Projects',
        'Up to 100 Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Basic Reports',
        'Admin Report App',
        'Sales Report App'
      ],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '150,000',
      features: [
        '25 Users',
        '50 Projects',
        'Unlimited Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Advanced Reports',
        'Admin Report App',
        'Sales Report App',
        'External Integration',
        'Priority Support'
      ],
      isPopular: true
    },
    {
      name: 'Business',
      price: '100,000',
      features: [
        'Unlimited Users',
        'Unlimited Projects',
        'Unlimited Customers',
        'Advanced Analytics',
        'Inventory Management',
        'Customer Management',
        'Invoice Management',
        'Sales Management',
        'Custom Reports',
        'Admin Report App',
        'Sales Report App'
      ],
      isPopular: false
    }
  ]
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const plans = isYearly ? pricingData.yearly : pricingData.monthly

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Choose Plan</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">That&apos;s Right For You</h3>
          <p className="text-gray-600 mb-6 sm:mb-8">Choose the plan that suits your needs best</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full"
              role="switch"
              aria-checked={isYearly}
            >
              <div
                className={`relative h-7 w-14 rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                    isYearly ? 'left-8' : 'left-1'
                  }`}
                />
              </div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing cards - Responsive grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-blue-600 text-white md:scale-105 shadow-xl order-first md:order-none'
                  : 'border border-gray-200 hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{plan.name}</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                <span className="text-sm ml-1">XAF</span>
                <span className="text-sm ml-2">/ {isYearly ? 'year' : 'month'}</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.isPopular ? 'text-white' : 'text-blue-500'
                      }`}
                    />
                    <span className={`${plan.isPopular ? 'text-white' : 'text-gray-600'} text-sm sm:text-base`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 sm:py-3 rounded-full transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
              >
                Sign Up Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

