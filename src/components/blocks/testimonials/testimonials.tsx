'use client'


import TestimonialCard from '@/components/blocks/testimonials/testimonial-card'
import type { TestimonialItem } from '@/components/blocks/testimonials/testimonial-card'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

const Testimonials = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
  return (
    <section id='testimonials' className='space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24'>
      {/* Testimonial Header */}
      <MotionPreset
        className='mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8'
        fade
        slide={{ direction: 'down', offset: 50 }}
        blur
        transition={{ duration: 0.5 }}
      >
        <p className='text-primary text-sm font-medium uppercase'>Testimonials</p>

        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Trusted by Teams Who Run Quality</h2>

        <p className='text-muted-foreground text-xl'>
          What IQAC coordinators, department heads and faculty say about working with EduAssura.
        </p>
      </MotionPreset>

      {/* Testimonials Marquee */}
      <div className='w-full'>
        <Marquee pauseOnHover duration={70} gap={2.25} className='overflow-visible overflow-x-clip pb-5 *:items-end'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>


    </section>
  )
}

export default Testimonials
