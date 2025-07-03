import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Bot,
  Bug,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    name: 'Web Applications',
    description:
      'Custom web applications built with modern frameworks like React, Next.js, and TypeScript.',
    icon: Globe,
  },
  {
    name: 'Mobile Development',
    description:
      'Cross-platform mobile applications using React Native and modern mobile technologies.',
    icon: Smartphone,
  },
  {
    name: 'Backend Development',
    description:
      'Scalable APIs, databases, and server-side solutions built with Node.js and cloud technologies.',
    icon: Database,
  },
  {
    name: 'Cloud Solutions',
    description:
      'Deploy and scale your applications with cloud platforms like AWS, Vercel, and Azure.',
    icon: Cloud,
  },
  {
    name: 'AI Integrations',
    description:
      'Integrate AI capabilities to your applications, including chatbots, image generation, and more.',
    icon: Bot,
  },
  {
    name: 'Quality Assurance',
    description:
      'Test and optimize your applications for performance, security, and user experience.',
    icon: Bug,
  },
]

export default function Services() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Software Development Knowledges and Experiences
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Since 2019, I&apos;ve been working as a software developer and have
            acquired a deep understanding of the full development lifecycle.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex items-center justify-center gap-x-6">
          <Link href="/contact" className="btn-primary px-6 py-3 text-lg">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/services" className="btn-secondary px-6 py-3 text-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
