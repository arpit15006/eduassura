'use client'

import { useState } from 'react'

import { SendIcon, LoaderIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'

import LogoVector from '@/assets/svg/logo-vector'
import DottedSheet from '@/assets/svg/dotted-sheet'

const CTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get('cta-email')
    const personName = formData.get('cta-person-name')
    const contactNumber = formData.get('cta-contact-number')
    const designation = formData.get('cta-designation')
    const organizationName = formData.get('cta-organization')

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, personName, contactNumber, designation, organizationName })
      })
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Failed to submit email', error)

      // We still show success to not disrupt the UX if API fails in demo mode
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id='cta' className='relative z-1 pt-16 pb-16 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-24'>
      <div className='bg-background mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='dark:bg-muted bg-primary relative overflow-hidden rounded-3xl border-none pt-20 pb-32 text-center shadow-2xl max-sm:pt-10 max-sm:pb-15'>
          <CardContent className='px-6'>
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center justify-center gap-4'
            >
              <h2 className='dark:text-foreground text-2xl font-semibold text-white md:text-3xl lg:text-4xl'>
                Transform Your Institutional Quality Assurance
              </h2>

              <p className='dark:text-muted-foreground w-full text-xl text-white/80 lg:max-w-2xl'>
                See EduAssura set up with your institutes, departments, and accreditation criteria - and every faculty
                record, verification, and report in one unified platform.
              </p>
            </MotionPreset>
            <MotionPreset
              className='absolute bottom-0 left-0 text-[#F4F4F5]/10'
              fade
              slide
              transition={{ duration: 0.5 }}
            >
              <LogoVector className='max-lg:hidden' />
            </MotionPreset>

            <MotionPreset
              className='absolute right-0 bottom-0 text-[#F4F4F5]/10'
              fade
              slide={{ direction: 'right' }}
              transition={{ duration: 0.5 }}
            >
              <LogoVector flip className='max-lg:hidden' />
            </MotionPreset>
          </CardContent>
        </Card>

        <MotionPreset fade blur zoom={{ initialScale: 0.95 }} delay={0.6} transition={{ duration: 0.4 }}>
          {isSubmitted ? (
            <div className='bg-background relative mx-auto -mt-12 flex size-fit w-full max-w-lg items-center justify-center gap-3 rounded-xl border-2 border-green-500/50 bg-green-50/50 p-4 shadow-sm dark:bg-green-950/20'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                </svg>
              </div>
              <p className='text-lg font-medium text-green-700 dark:text-green-400'>
                Demo requested! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='border-primary dark:border-primary/70 bg-background relative mx-auto -mt-16 flex w-full max-w-lg flex-col gap-5 rounded-xl border-2 p-6 shadow-xl'>
              <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='cta-person-name' className='text-sm font-medium text-foreground'>Person Name <span className='text-destructive'>*</span></label>
                  <Input id='cta-person-name' name='cta-person-name' placeholder='John Doe' required />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='cta-email' className='text-sm font-medium text-foreground'>Mail ID <span className='text-destructive'>*</span></label>
                  <Input type='email' id='cta-email' name='cta-email' placeholder='john@example.com' required />
                </div>
              </div>
              
              <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='cta-contact-number' className='text-sm font-medium text-foreground'>Contact Number</label>
                  <Input type='tel' id='cta-contact-number' name='cta-contact-number' placeholder='+1 (555) 000-0000' />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='cta-designation' className='text-sm font-medium text-foreground'>Designation</label>
                  <Input id='cta-designation' name='cta-designation' placeholder='e.g. Dean, Professor' />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='cta-organization' className='text-sm font-medium text-foreground'>Organization Name <span className='text-destructive'>*</span></label>
                <Input id='cta-organization' name='cta-organization' placeholder='University Name' required />
              </div>

              <div className='mt-4 flex w-full justify-center'>
                <PrimaryFlowButton type='submit' disabled={isLoading}>
                  {isLoading ? <LoaderIcon className='animate-spin' /> : 'Book a demo'}
                </PrimaryFlowButton>
              </div>
            </form>
          )}
        </MotionPreset>
      </div>

      <DottedSheet className='pointer-events-none absolute inset-x-0 -z-1 mx-auto w-full max-w-7xl px-4 max-sm:-top-1/2 sm:bottom-1/4 sm:px-6 lg:px-8' />
    </section>
  )
}

export default CTASection
