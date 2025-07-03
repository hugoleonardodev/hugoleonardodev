import Link from 'next/link'
import navigation from '@/constants/navigation'
import { Tooltip } from 'flowbite-react'

export default function Footer() {
  return (
    <footer className="border-t-2 bg-white">
      <div className="container-width px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <Tooltip key={item.name} content={item.href} placement="top">
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-primary-600"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </Tooltip>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex justify-center space-x-6 md:justify-start">
            {navigation.main.map((item) => (
              <Tooltip key={item.name} content={item.name} placement="top">
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base leading-6 text-gray-600 hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </Tooltip>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-5 text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} hugoleonardodev. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
