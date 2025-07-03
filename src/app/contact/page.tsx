import type { Metadata } from 'next'
import NextLink from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Tooltip } from 'flowbite-react'
import contacts from '@/constants/contacts'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your software development project.',
}

export default function Contact() {
  return (
    <main className="section-padding bg-white">
      <div className="container-width">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to start your project? Let&apos;s discuss how we can bring
            your ideas to life.
          </p>

          <ul className="mt-10 space-y-8">
            {contacts.map((contact) => (
              <li key={contact.name} className="flex items-center space-x-4">
                <contact.icon className="h-6 w-6 text-primary-600" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {contact.name}
                  </h3>
                  <div className="flex items-center">
                    <p className="text-gray-600">{contact.href}</p>
                    {contact.href.includes('.com/') && (
                      <Tooltip content={`Visit ${contact.name}`}>
                        <NextLink
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600"
                        >
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </NextLink>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
