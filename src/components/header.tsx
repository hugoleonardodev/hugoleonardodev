'use client'
import NextImage from 'next/image'
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'
import { usePathname } from 'next/navigation'

import Portuguese from '@/assets/world-countries/br.png'
import English from '@/assets/world-countries/gb.png'
import Spanish from '@/assets/world-countries/es.png'

interface MyHeaderProps {
  navigationDictionary: Array<{
    title: string
    href: string
  }>
}

export function MyHeader({ navigationDictionary }: MyHeaderProps): React.JSX.Element {
  const path = usePathname()
  React.useEffect(() => {
    const toggleButton = document.getElementById('header-navbar-toggle')
    if (toggleButton?.lastChild != null) {
      toggleButton.removeChild(toggleButton.lastChild)
      const avatar = document.createElement('img')
      avatar.src = '/assets/hugo-leonardo.jpeg'
      avatar.alt = 'Hugo Leonardo - Full Stack Developer'
      avatar.className = 'w-12 h-12 rounded-full'
      toggleButton.appendChild(avatar)
    }
  }, [])
  return (
    <Navbar fluid rounded id="navbar" className="bg-gray-300 dark:bg-black">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">hugoleonardodev</span>
      </NavbarBrand>

      <DarkThemeToggle />

      {!path.includes('en-US') ? (
        <a href="https://www.hugoleonardodev.vercel.app/en-US" target="_blank" rel="noreferrer">
          <NextImage src={English} alt="English" width={32} height={16} />
        </a>
      ) : null}

      {!path.includes('es-ES') ? (
        <a href="https://www.hugoleonardodev.vercel.app/es-ES" target="_blank" rel="noreferrer">
          <NextImage src={Spanish} alt="Español" width={32} height={16} />
        </a>
      ) : null}

      {!path.includes('pt-BR') ? (
        <a href="https://www.hugoleonardodev.vercel.app/pt-BR" target="_blank" rel="noreferrer">
          <NextImage src={Portuguese} alt="Portugês" width={32} height={16} />
        </a>
      ) : null}

      <NavbarToggle id="header-navbar-toggle" />

      <NavbarCollapse>
        {navigationDictionary.map(link => (
          <NavbarLink href={link.href} key={link.href} className="md:py-4 md:dark:hover:text-[#E11D48]">
            {link.title}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  )
}
