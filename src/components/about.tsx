import React from 'react'

interface AboutMeProps {
  aboutMeDictionary: {
    id: string
    title: string
    name: string
    description: string
    hello: string
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    regards: string
    signature: string
  }
}
function AboutSection({ aboutMeDictionary }: AboutMeProps): React.JSX.Element {
  return (
    <section className="w-full flex flex-col bg-gray-100 rounded-lg dark:bg-[#1C1917] dark:border-gray-700">
      <div id={aboutMeDictionary.id}>
        <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {aboutMeDictionary.title}
        </h1>
        <h2 className="px-2 text-xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
          {aboutMeDictionary.name} - {aboutMeDictionary.description}
        </h2>
        <p className="px-2 pb-8 pt-4 mt-4 text-gray-500 text-center text-3xl dark:text-gray-400">
          {aboutMeDictionary.hello}
        </p>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div>
            <img src="/assets/home1.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <div>
            <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">
              {aboutMeDictionary.p1}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div className="w-96 sm:order-2">
            <img src="/assets/home2.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p2}</p>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div className="w-96">
            <img src="/assets/home3.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p3}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
