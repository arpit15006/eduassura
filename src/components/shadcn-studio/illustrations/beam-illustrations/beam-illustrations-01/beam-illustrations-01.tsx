'use client'

import { useRef } from 'react'

import {
  BadgeCheckIcon,
  FilePenLineIcon,
  FileSpreadsheetIcon,
  LayoutDashboardIcon,
  PaperclipIcon,
  UserCheckIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/ui/border-beam'
import {
  BeamConnection,
  ConnectionBeam
} from '@/components/shadcn-studio/illustrations/beam-illustrations/beam-connection'

import EduAssuraMark from '@/assets/svg/flow-logo'

// shadcn/studio Gradient Beam illustration, relabelled for EduAssura: how a record moves
// (faculty entry + proof -> HoD check -> quality cell -> verified -> dashboards / reports).
// Layout follows the width of its own container (container queries), not the viewport, so it
// stacks vertically in narrow slots such as the benefits panel.
const BeamIllustrations01 = () => {
  // Vars
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const btn4Ref = useRef<HTMLButtonElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)

  return (
    <div className='@container flex w-full justify-center'>
      <BeamConnection className='flex items-center justify-between gap-12 px-2 @max-3xl:w-full @max-3xl:flex-col @3xl:gap-3 @4xl:gap-8'>
        {({ containerRef, active }) => (
          <>
            <div className='flex items-center @max-3xl:w-full @max-3xl:flex-col @max-3xl:gap-6'>
              <div className='flex @max-3xl:w-full @max-3xl:justify-between @3xl:flex-col @3xl:gap-30'>
                <div
                  ref={div1Ref}
                  className='bg-background z-1 flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 @max-3xl:w-full @max-3xl:max-w-33.5'
                >
                  <FilePenLineIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>Faculty entry</span>
                </div>
                <div
                  ref={div2Ref}
                  className='bg-background z-1 flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 @max-3xl:w-full @max-3xl:max-w-33.5'
                >
                  <PaperclipIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>Proof upload</span>
                </div>
              </div>
              <div className='flex items-center @max-3xl:w-full @max-3xl:justify-between @3xl:flex-col @3xl:gap-14.75'>
                <span ref={span1Ref} className='size-0.5 @max-3xl:ml-16.5' />
                <div
                  ref={div3Ref}
                  className='bg-background z-1 flex items-center gap-1.25 rounded-lg border px-2 py-1.5'
                >
                  <UserCheckIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>HoD check</span>
                </div>
                <span ref={span2Ref} className='size-0.5 @max-3xl:mr-16.5' />
              </div>
            </div>

            <Button
              ref={btn4Ref}
              className='bg-primary text-primary-foreground relative z-1 flex items-center gap-1.25 rounded-lg px-2 py-1.5 text-base'
            >
              <EduAssuraMark className='size-6' />
              <span className='text-sm font-medium whitespace-nowrap [&+div]:inset-px'>Quality cell</span>
              <BorderBeam colorFrom='var(--primary-foreground)' colorTo='var(--primary-foreground)' size={35} />
            </Button>

            <div className='flex items-center @max-3xl:w-full @max-3xl:flex-col @max-3xl:gap-6'>
              <div className='flex items-center @max-3xl:w-full @max-3xl:justify-between @3xl:flex-col @3xl:gap-14.75'>
                <span ref={span3Ref} className='size-0.5 @max-3xl:ml-16.5' />
                <div
                  ref={div5Ref}
                  className='bg-background z-1 flex items-center gap-1.25 rounded-lg border px-2 py-1.5'
                >
                  <BadgeCheckIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>Verified</span>
                </div>
                <span ref={span4Ref} className='size-0.5 @max-3xl:mr-16.5' />
              </div>
              <div className='flex @max-3xl:w-full @max-3xl:justify-between @3xl:flex-col @3xl:gap-30'>
                <div
                  ref={div6Ref}
                  className='bg-background z-1 flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 @max-3xl:w-full @max-3xl:max-w-33.5'
                >
                  <LayoutDashboardIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>Dashboards</span>
                </div>
                <div
                  ref={div7Ref}
                  className='bg-background z-1 flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 @max-3xl:w-full @max-3xl:max-w-33.5'
                >
                  <FileSpreadsheetIcon className='size-4 shrink-0' />
                  <span className='text-sm font-medium whitespace-nowrap'>Reports</span>
                </div>
              </div>
            </div>

            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={span1Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={span2Ref}
              className='text-primary @max-3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={span2Ref}
              reverse
              className='text-primary @3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span1Ref}
              toRef={div3Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span2Ref}
              toRef={div3Ref}
              className='text-primary @max-3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span2Ref}
              toRef={div3Ref}
              reverse
              className='text-primary @3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={btn4Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={btn4Ref}
              toRef={div5Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={span3Ref}
              className='text-primary @max-3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={span3Ref}
              reverse
              className='text-primary @3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={span4Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span3Ref}
              toRef={div6Ref}
              className='text-primary @max-3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span3Ref}
              toRef={div6Ref}
              reverse
              className='text-primary @3xl:hidden'
              duration={4}
              active={active}
            />
            <ConnectionBeam
              containerRef={containerRef}
              fromRef={span4Ref}
              toRef={div7Ref}
              className='text-primary'
              duration={4}
              active={active}
            />
          </>
        )}
      </BeamConnection>
    </div>
  )
}

export default BeamIllustrations01
