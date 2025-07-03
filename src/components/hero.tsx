import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield } from 'lucide-react'
import getFullYearsOfExperience from '@/helpers/getFullYersOfExperience'

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-8 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Professional Software Development
            <span className="text-primary-600"> Solutions</span>
          </h1>
          <p className="mt-6 animate-slide-up text-lg leading-8 text-gray-600">
            Transform your business with custom web applications, scalable
            solutions, and cutting-edge technology. Over{' '}
            {getFullYearsOfExperience(2019, 4)} years of experience delivering
            exceptional software solutions.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className="btn-primary px-6 py-3 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary px-6 py-3 text-lg">
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary-100 p-3">
                <Code className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Full-Stack Development
              </h3>
              <p className="mt-2 text-base text-gray-600">
                End-to-end solutions from frontend to backend
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary-100 p-3">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Rapid development with modern tools and practices
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary-100 p-3">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Secure & Scalable
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Built with security and scalability in mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
