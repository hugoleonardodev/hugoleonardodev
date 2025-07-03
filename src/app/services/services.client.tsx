'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import NextLink from 'next/link'
import { CheckCircle, Zap, Globe, ArrowRight, Star, Gauge } from 'lucide-react'
import services from '@/constants/services'
import performanceMetrics from '@/constants/performance'

const ServicesClient = () => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [performanceScore, setPerformanceScore] = useState(0)
  const performanceSectionRef = useRef(null)

  const handleScroll = useCallback(() => {
    if (!performanceSectionRef.current) return

    const section: Element = performanceSectionRef.current
    const rect = section.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Calculate when section starts being visible and when it's fully passed
    const sectionTop = rect.top
    const sectionHeight = rect.height
    const sectionBottom = rect.bottom

    // Start animation when section enters viewport
    const startPoint = windowHeight + 100 // Start when section is 100px from bottom of viewport
    const endPoint = -sectionHeight + (window.innerWidth > 768 ? 900 : 1400) // End when section is mostly scrolled past

    if (sectionTop <= startPoint && sectionBottom >= 0) {
      // Calculate scroll progress through the section
      const totalScrollDistance = startPoint - endPoint
      // const currentProgress = startPoint - sectionTop
      const currentProgress = startPoint - sectionTop
      const scrollProgress = Math.max(
        0,
        Math.min(1, currentProgress / totalScrollDistance)
      )

      // Update score based on scroll progress (0 to 100)
      const newScore = Math.floor(scrollProgress * 100)
      setPerformanceScore(newScore)
    } else if (sectionTop > startPoint) {
      // Reset score when section is not yet visible
      setPerformanceScore(0)
    } else if (sectionBottom < 0) {
      // Keep score at 100 when section is fully scrolled past
      setPerformanceScore(100)
    }
  }, [])

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Initial check in case section is already in view
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Services Grid */}
      <section className="order-1 px-6 py-20 sm:order-1">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-primary-600">Services </span>I Offer
            </h1>
            <p className="mt-6 animate-slide-up text-lg leading-8 text-gray-600">
              Comprehensive development services tailored to bring your vision
              to life
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-900/20 bg-gray-100/10 px-6 py-3 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="0 font-medium text-gray-900">
                Full Stack Development
              </span>
            </div>
          </div>
          <div className="order-2 grid animate-slide-up grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const IconComponent = service.icon
              const isActive = activeService === service.id

              return (
                <div
                  key={service.id}
                  className={`group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${service.color} mb-6`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                    <p className="mb-4 text-gray-700">{service.subtitle}</p>
                    <p className="mb-6 leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <div
                      className={`transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                    >
                      <div className="mb-6 space-y-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3">
                      {isActive ? 'Show Less' : 'Learn More'}
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Excellence Section */}
      <section
        className="relative order-1 overflow-hidden bg-gray-50 px-6 py-20 sm:order-2"
        ref={performanceSectionRef}
        id="performance-section"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div> */}
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              100% Google Lighthouse Scores
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-700">
              Creating blazing-fast websites that rank at the top of Google
              Search with perfect performance metrics
            </p>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-200/20 px-6 py-3 backdrop-blur-sm">
              <Gauge className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-600">
                Performance Excellence
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Features List */}
            <div className="order-2 space-y-6 sm:order-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                  <Star className="h-6 w-6 text-yellow-400" />
                  What I Deliver
                </h3>
                <div className="space-y-4">
                  {[
                    'Perfect 100/100 Google Lighthouse scores',
                    'Core Web Vitals optimization',
                    'Advanced image optimization & lazy loading',
                    'Code splitting & bundle optimization',
                    'SEO-friendly markup & meta tags',
                    'Accessibility compliance (WCAG 2.1)',
                    'Progressive Web App features',
                    'Cross-browser compatibility testing',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Lighthouse Score Display */}
            <div className="order-1 space-y-8 sm:order-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-8 text-center">
                  <div className="relative mx-auto mb-6 inline-flex h-32 w-32 items-center justify-center">
                    <svg
                      className="h-32 w-32 -rotate-90 transform"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgb(75 85 99)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgb(34 197 94)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(performanceScore / 100) * 339.29} 339.29`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">
                        {performanceScore}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Overall Performance Score
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {performanceMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-white/5 p-4 text-center"
                    >
                      <div
                        className={`text-2xl font-bold ${metric.color} mb-1`}
                      >
                        {performanceScore}
                      </div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="order-3 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-white/10 bg-gray-100 p-12 backdrop-blur-sm">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700">
              Let&apos;s discuss your project and create a digital solution that
              exceeds your expectations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <NextLink
                href="https://www.lubronze.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 text-lg"
              >
                <Globe className="mr-2 h-5 w-5" />
                View Live Example
                <ArrowRight className="ml-2 h-4 w-4" />
              </NextLink>
              <NextLink
                href="/contact"
                className="btn-secondary px-6 py-3 text-lg"
              >
                Get In Touch
              </NextLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesClient
