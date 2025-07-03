import { Github, Linkedin, Mail } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/hugoleonardodev',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hugo-leonardo-1b94592b1/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'hugoleonardo.dev@gmail.com',
      icon: Mail,
    },
  ],
}

export default navigation
