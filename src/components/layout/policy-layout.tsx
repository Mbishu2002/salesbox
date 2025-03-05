'use client'

import React from 'react'
import { Lock, ShieldCheck, Cookie } from 'lucide-react'

export function PolicyLayout({ children }: { children: React.ReactNode }) {
  const policyComponent = React.Children.toArray(children)[0] as React.ReactElement
  const policyType = policyComponent?.type as React.FC

  const firstChild = React.Children.toArray(policyComponent?.props?.children)[0]
  const titleContent = React.isValidElement(firstChild) ? firstChild.props.children : 'Policy Document'

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 rounded-full">
              {policyType.name === 'PrivacyPolicy' && <Lock className="w-6 h-6 text-blue-600" />}
              {policyType.name === 'TermsOfService' && <ShieldCheck className="w-6 h-6 text-blue-600" />}
              {policyType.name === 'CookiePolicy' && <Cookie className="w-6 h-6 text-blue-600" />}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {titleContent}
            </h1>
          </div>
          
          <article className="prose prose-slate prose-sm sm:prose lg:prose-lg max-w-none">
            {children}
          </article>
          
          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Last updated: {new Date().toLocaleDateString('en-CM', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 