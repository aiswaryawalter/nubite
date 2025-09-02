'use client'

import { useState } from 'react'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail('')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 section-padding">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-primary-700">Thank You!</h2>
          <p className="text-xl text-neutral-600">
            You've been added to our early taste tester list. We'll notify you as soon as our first batch is ready!
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="btn-primary"
          >
            Subscribe Another Email
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-r from-primary-50 to-accent-50 section-padding">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700">
            Be the First to Taste
          </h2>
          <p className="text-xl text-neutral-600">
            Join our exclusive list of early taste testers and be among the first to experience Nubite.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 text-lg border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              required
            />
            {error && (
              <p className="text-red-600 text-sm text-left">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        <p className="text-sm text-neutral-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
