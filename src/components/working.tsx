'use client'
import React from 'react'
import { Timeline } from 'flowbite-react'
import { HiCalendar } from 'react-icons/hi'
import { useWindowSize } from '@/hooks'

interface WorkingExperienceProps {
  workingExperienceDictionary: {
    id: string
    title: string
    description: string
    experiences: Array<{
      company: string
      role: string
      duration: string
      location: string
      tasks: string[]
    }>
  }
}

export function WorkingExperience({ workingExperienceDictionary }: WorkingExperienceProps): React.JSX.Element {
  const { width } = useWindowSize()
  return (
    <section className="pl-6 pr-2 sm:pl-0 pr-0" id={workingExperienceDictionary.id}>
      <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {workingExperienceDictionary.title}
      </h1>
      <h2 className="px-2 mb-8 text-xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
        {workingExperienceDictionary.description}
      </h2>
      <Timeline horizontal={width > 1023}>
        {workingExperienceDictionary.experiences.map(experience => (
          <Timeline.Item key={experience.company}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="text-gray-600">{experience.duration}</Timeline.Time>
              <Timeline.Title>{experience.company}</Timeline.Title>
              <Timeline.Body className="text-gray-600">{experience.role}</Timeline.Body>
              <Timeline.Body className="text-gray-600">{experience.location}</Timeline.Body>
              <ul>
                {experience.tasks.map(task => (
                  <li className="list-[disclosure-closed]" key={task}>
                    {task}
                  </li>
                ))}
              </ul>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  )
}
