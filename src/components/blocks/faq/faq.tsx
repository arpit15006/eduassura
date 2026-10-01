'use client'

import { useState } from 'react'

import { motion } from 'motion/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

export type FAQs = {
  question: string
  answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  const [activeItem, setActiveItem] = useState<string>('item-1')
  const [rotationKey, setRotationKey] = useState(0)

  const handleValueChange = (value: string) => {
    setActiveItem(value)
    setRotationKey(prev => prev + 1)
  }

  return (
    <section id='faq' className='pt-8 sm:pt-16 lg:pt-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* FAQ Header */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <p className='text-primary text-sm font-medium uppercase'>FAQ</p>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Frequently asked questions</h2>

          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            Quick answers about how EduAssura works for your faculty, departments and quality cell.
          </p>
        </MotionPreset>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <Accordion value={activeItem} onValueChange={handleValueChange} type='single' collapsible className='w-full'>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className='py-5 text-base'>{item.question}</AccordionTrigger>
                <AccordionContent className='text-muted-foreground pb-5 text-base'>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right content */}
          <div className='group bg-muted/50 relative mx-auto flex w-full max-w-148 items-center justify-center overflow-hidden rounded-2xl border p-8 shadow-inner'>
            <img
              src='/images/dashboard.webp'
              alt='EduAssura Dashboard'
              loading='lazy'
              className='w-full h-auto rounded-xl shadow-2xl ring-1 ring-border/50 transition-transform duration-500 group-hover:scale-105 dark:hidden'
            />
            <img
              src='/images/dashboard-dark.webp'
              alt='EduAssura Dashboard'
              loading='lazy'
              className='hidden w-full h-auto rounded-xl shadow-2xl ring-1 ring-border/50 transition-transform duration-400 group-hover:scale-105 dark:inline-block'
            />

            {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map(
              (position, idx) => (
                <motion.svg
                  key={`${idx}-${rotationKey}`}
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='12'
                  viewBox='0 0 10 12'
                  fill='none'
                  className={cn(
                    'absolute transition-opacity duration-500 group-hover:opacity-0 max-md:hidden',
                    position
                  )}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <path d='M5 0L10 6L5 12L0 6L5 0Z' fill='var(--primary)' />
                </motion.svg>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
