import {
  Code,
  Smartphone,
  Server,
  Cloud,
  Brain,
  CheckCircle,
} from 'lucide-react'

const services = [
  {
    id: 'web',
    icon: Code,
    title: 'Web Development',
    subtitle: 'Modern, responsive web applications',
    description:
      'Building cutting-edge web applications with the latest technologies and best practices.',
    features: [
      'React, Next.js, Vue.js expertise',
      'TypeScript for type-safe development',
      'Responsive design for all devices',
      'SEO optimization & Core Web Vitals',
      'Progressive Web Apps (PWA)',
      'Modern CSS frameworks & animations',
    ],
    color: 'from-primary-600 to-primary-600',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'Native & cross-platform apps',
    description:
      'Creating high-performance mobile applications that deliver exceptional user experiences.',
    features: [
      'React Native development',
      'Cross-platform compatibility',
      'Native iOS & Android features',
      'App Store optimization',
      'Offline functionality',
      'Push notifications & deep linking',
    ],
    color: 'from-primary-600 to-primary-600',
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Development',
    subtitle: 'Scalable server-side solutions',
    description:
      'Building robust, scalable backend systems that power your applications efficiently.',
    features: [
      'Node.js, Python, Java expertise',
      'RESTful & GraphQL APIs',
      'Database design & optimization',
      'Authentication & authorization',
      'Microservices architecture',
      'Real-time data processing',
    ],
    color: 'from-primary-600 to-primary-600',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    subtitle: 'Scalable cloud infrastructure',
    description:
      'Implementing cloud-native solutions that scale with your business needs.',
    features: [
      'AWS, Azure, Google Cloud',
      'Serverless architecture',
      'Docker & Kubernetes',
      'CI/CD pipeline setup',
      'Auto-scaling solutions',
      'Cost optimization strategies',
    ],
    color: 'from-primary-600 to-primary-600',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Integration',
    subtitle: 'Intelligent application features',
    description:
      'Integrating artificial intelligence to enhance your applications with smart capabilities.',
    features: [
      'Machine learning model integration',
      'Natural language processing',
      'Computer vision solutions',
      'Chatbots & virtual assistants',
      'Predictive analytics',
      'Custom AI solutions',
    ],
    color: 'from-primary-600 to-primary-600',
  },
  {
    id: 'qa',
    icon: CheckCircle,
    title: 'Quality Assurance',
    subtitle: 'Comprehensive testing strategies',
    description:
      'Ensuring your applications meet the highest standards of quality and reliability.',
    features: [
      'Automated testing suites',
      'Performance testing',
      'Security audits',
      'Code review processes',
      'Cross-browser compatibility',
      'Load testing & monitoring',
    ],
    color: 'from-primary-600 to-primary-600',
  },
]

export default services
