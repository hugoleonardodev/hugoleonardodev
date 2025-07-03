import type { Metadata } from 'next'
import getFullYearsOfExperience from '@/helpers/getFullYersOfExperience'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about our software development expertise and experience.',
}

export default function About() {
  return (
    <main className="section-padding bg-white">
      <div className="container-width">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With over {getFullYearsOfExperience(2019, 4)} years of experience in
            software development, I specialize in creating modern, scalable web
            applications and digital solutions that drive business growth.
          </p>
          <div className="mt-10 space-y-6 text-base leading-7 text-gray-700">
            <p>
              My expertise spans the full development stack, from responsive
              frontend interfaces to robust backend systems. I&apos;m passionate
              about clean code, modern development practices, and delivering
              solutions that exceed expectations.
            </p>
            <p>
              I work with cutting-edge technologies including React, Next.js,
              TypeScript, Node.js, and cloud platforms to build applications
              that are not only functional but also maintainable and scalable.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
