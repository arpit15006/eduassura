import type { ReactNode } from 'react'

import { InfinityIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import FlowLogo from '@/assets/svg/flow-logo'

import { cn } from '@/lib/utils'

export type WhyItem = {
  icon: ReactNode
  title: string
  description: string
}

const ItemList = ({ items, filled }: { items: WhyItem[]; filled?: boolean }) => (
  <ul className='space-y-6'>
    {items.map((item, index) => (
      <MotionPreset
        key={item.title}
        component='li'
        fade
        slide={{ direction: 'down', offset: 25 }}
        delay={0.05 * index}
        transition={{ duration: 0.5 }}
        className='flex items-start gap-4'
      >
        <Avatar className='size-10 shrink-0 rounded-md after:border-0'>
          <AvatarFallback
            className={cn(
              'shrink-0 rounded-md [&>svg]:size-5',
              filled ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
            )}
          >
            {item.icon}
          </AvatarFallback>
        </Avatar>
        <div className='space-y-1'>
          <h3 className='text-lg font-semibold'>{item.title}</h3>
          <p className='text-muted-foreground text-base'>{item.description}</p>
        </div>
      </MotionPreset>
    ))}
  </ul>
)

const Why = ({ whyItems, services }: { whyItems: WhyItem[]; services: WhyItem[] }) => {
  return (
    <section id='why' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8'>
        <Card className='shadow-none'>
          <CardContent className='space-y-10 p-2 sm:p-4'>
            <div className='space-y-3'>
              <p className='text-primary text-sm font-medium uppercase'>Why us</p>
              <h2 className='flex items-center gap-3 text-2xl font-semibold md:text-3xl lg:text-4xl'>
                <FlowLogo className='size-9 shrink-0' />
                Why EduAssura?
              </h2>
            </div>
            <ItemList items={whyItems} />
          </CardContent>
        </Card>

        <Card className='shadow-none'>
          <CardContent className='space-y-10 p-2 sm:p-4'>
            <div className='space-y-3'>
              <p className='text-primary text-sm font-medium uppercase'>Included with every plan</p>
              <h2 className='flex items-center gap-3 text-2xl font-semibold md:text-3xl lg:text-4xl'>
                <InfinityIcon className='text-primary size-9 shrink-0' />
                Unlimited Services
              </h2>
            </div>
            <ItemList items={services} filled />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Why
