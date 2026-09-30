'use client'

import { useState, type ReactNode } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { SecondaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

export type MajorModule = {
  icon: ReactNode
  title: string
  description: string
}

export type ModuleGroup = {
  icon: ReactNode
  title: string
  modules: { name: string; detail: string }[]
}

const ModuleIcon = ({ children }: { children: ReactNode }) => (
  <Avatar className='size-10 rounded-md after:border-0'>
    <AvatarFallback className='bg-primary/10 text-primary shrink-0 rounded-md [&>svg]:size-5'>
      {children}
    </AvatarFallback>
  </Avatar>
)

const Modules = ({ majorModules, moduleGroups }: { majorModules: MajorModule[]; moduleGroups: ModuleGroup[] }) => {
  const [open, setOpen] = useState(false)
  const total = moduleGroups.reduce((count, group) => count + group.modules.length, 0)

  return (
    <section id='modules' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <p className='text-primary text-sm font-medium uppercase'>Modules</p>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Every Record Your IQAC Needs</h2>

          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            {total} modules for faculty work, research, events, verification and reporting - each with the fields and
            proof your quality reports ask for.
          </p>
        </MotionPreset>

        {/* Major modules */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {majorModules.map((module, index) => (
            <MotionPreset
              key={module.title}
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.1 * (index % 3)}
              transition={{ duration: 0.5 }}
            >
              <Card className='h-full shadow-none'>
                <CardContent className='flex flex-col gap-4'>
                  <ModuleIcon>{module.icon}</ModuleIcon>
                  <h3 className='text-xl font-semibold'>{module.title}</h3>
                  <p className='text-muted-foreground text-base'>{module.description}</p>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>

        {/* All modules */}
        <Collapsible open={open} onOpenChange={setOpen} className='mt-12 flex flex-col items-center gap-12'>
          <SecondaryFlowButton asChild>
            <CollapsibleTrigger>
              {open ? 'Hide all modules' : `View all ${total} modules`}
              <ChevronDownIcon className={cn('transition-transform duration-300', open && 'rotate-180')} />
            </CollapsibleTrigger>
          </SecondaryFlowButton>

          <CollapsibleContent className='w-full'>
            <div className='grid gap-6 md:grid-cols-2'>
              {moduleGroups.map(group => (
                <Card key={group.title} className='shadow-none'>
                  <CardContent className='flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                      <ModuleIcon>{group.icon}</ModuleIcon>
                      <h3 className='text-xl font-semibold'>{group.title}</h3>
                      <span className='text-muted-foreground ml-auto text-sm'>{group.modules.length} modules</span>
                    </div>
                    <ul className='divide-y'>
                      {group.modules.map(module => (
                        <li key={module.name} className='space-y-1 py-3 first:pt-0 last:pb-0'>
                          <p className='font-medium'>{module.name}</p>
                          <p className='text-muted-foreground text-sm'>{module.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}

export default Modules
