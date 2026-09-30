import type { ReactNode } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

export type Integration = {
  icon: ReactNode
  title: string
  description: string
}

const Integrations = ({ integrations }: { integrations: Integration[] }) => {
  return (
    <section id='integrations' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <p className='text-primary text-sm font-medium uppercase'>Integrations</p>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Works With the Systems You Already Use</h2>

          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            EduAssura connects to your university’s existing systems through APIs - so data flows in once and stays in
            sync, with no double entry.
          </p>
        </MotionPreset>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {integrations.map((integration, index) => (
            <MotionPreset
              key={integration.title}
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.1 * (index % 3)}
              transition={{ duration: 0.5 }}
            >
              <Card className='h-full shadow-none'>
                <CardContent className='flex flex-col gap-4'>
                  <Avatar className='size-10 rounded-md after:border-0'>
                    <AvatarFallback className='bg-primary/10 text-primary shrink-0 rounded-md [&>svg]:size-5'>
                      {integration.icon}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className='text-xl font-semibold'>{integration.title}</h3>
                  <p className='text-muted-foreground text-base'>{integration.description}</p>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations
