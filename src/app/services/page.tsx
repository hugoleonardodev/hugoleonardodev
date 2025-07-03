import type { Metadata } from 'next'
import ServicesClient from './services.client'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover my software development skills and services.',
}

const Services = () => {
  return <ServicesClient />
}

export default Services
