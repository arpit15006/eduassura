import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
  CrownIcon,
  GraduationCapIcon,
  PlusIcon,
  ShieldCheckIcon,
  ThumbsUpIcon,
  UserIcon,
  UsersIcon,
  UsersRoundIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Magnetic } from '@/components/ui/magnet-effect'

import { cn } from '@/lib/utils'

import StatCard from '@/components/blocks/features/stat-card'
import GoalAndTargetCard from '@/components/blocks/features/goal-and-target-card'
import SalesGrowthCard from '@/components/blocks/features/sales-growth-card'
import TargetVisibilityRippleBg from '@/components/blocks/features/target-visibility-ripple-bg'
import RegularUpdatesCard from '@/components/blocks/features/regular-updates-card'

const visitorData = [
  {
    product: 'Faculty',
    percentage: 28,
    amount: 362,
    trend: 'up',
    heightClass: 'h-[28%]',
    color: 'bg-primary'
  },
  {
    product: 'Events',
    percentage: 78,
    amount: 518,
    trend: 'down',
    heightClass: 'h-[78%]',
    color: 'bg-secondary'
  },
  {
    product: 'Awards',
    percentage: 32,
    amount: 97,
    trend: 'up',
    heightClass: 'h-[32%]',
    color: 'bg-primary/60'
  }
]

const Features = () => {
  return (
    <section id='features' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <p className='text-primary text-sm font-medium uppercase'>Features</p>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Key Features, Built for Quality Assurance</h2>

          <p className='text-muted-foreground text-xl'>
            Everything your institution needs to collect, validate, monitor, and report academic and accreditation data
            - all from one centralized platform.
          </p>
        </MotionPreset>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {/* Column 1 */}
          <div className='flex flex-col gap-6'>
            {/* Product Reach Card */}
            <MotionPreset fade slide={{ direction: 'down', offset: 35 }} transition={{ duration: 0.5 }}>
              <Card className='gap-26.5 shadow-none'>
                <CardContent className='flex flex-col items-center gap-8'>
                  <MotionPreset
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={0.15}
                    transition={{ duration: 0.5 }}
                  >
                    <StatCard
                      avatarIcon={<UsersRoundIcon className='size-4' />}
                      title='Data entries this quarter'
                      statNumber='1,284'
                      percentage={-6}
                    />
                  </MotionPreset>

                  <MotionPreset
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={0.3}
                    transition={{ duration: 0.5 }}
                    className='relative flex w-full rounded-xl border px-4 py-6'
                  >
                    {visitorData.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex grow flex-col gap-2.5 border-dashed px-3 py-2',
                          index < visitorData.length - 1 && 'border-r'
                        )}
                      >
                        <span className='text-muted-foreground text-sm'>{item.product}</span>

                        <div className='text-2xl font-medium'>{item.percentage}%</div>
                        <div className='flex min-h-25 flex-1 items-end'>
                          <div className={cn('bg-primary grow rounded-xl', item.heightClass, item.color)}></div>
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                          <span className='text-muted-foreground text-sm'>{item.amount}</span>
                          {item.trend === 'up' ? (
                            <ArrowUpRightIcon className='size-4' />
                          ) : (
                            <ArrowDownLeftIcon className='size-4' />
                          )}
                        </div>
                      </div>
                    ))}
                    <Magnetic
                      range={130}
                      strength={0.25}
                      className='absolute -bottom-14 left-1/2 w-71.5 -translate-x-1/2'
                    >
                      <MotionPreset
                        fade
                        zoom
                        delay={0.75}
                        transition={{ duration: 0.5 }}
                        className='bg-card flex items-center gap-2 rounded-xl border p-4 shadow-lg'
                      >
                        <Avatar className='size-9.5 shadow-md after:border-0'>
                          <AvatarFallback className='bg-primary/10 text-primary shrink-0'>
                            <ThumbsUpIcon className='size-4.5' />
                          </AvatarFallback>
                        </Avatar>
                        <p className='text-muted-foreground text-xs'>
                          Verified records are up <span className='text-card-foreground'>32%</span> this quarter and
                          faculty uploaded 214 new documents
                        </p>
                      </MotionPreset>
                    </Magnetic>
                  </MotionPreset>
                </CardContent>
                <CardContent className='flex flex-col gap-4'>
                  <MotionPreset
                    component='h5'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={0.45}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold'
                  >
                    Faculty Profile Management
                  </MotionPreset>
                  <MotionPreset
                    component='p'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={0.6}
                    transition={{ duration: 0.5 }}
                    className='text-muted-foreground text-base'
                  >
                    Track faculty profiles, research publications, patents, events and achievements across departments
                    for the whole institution.
                  </MotionPreset>
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Targeted Visibility Card */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.9}
              transition={{ duration: 0.5 }}
              className='h-full'
            >
              <Card className='h-full justify-between gap-0 pt-0 shadow-none'>
                <MotionPreset
                  fade
                  slide={{ direction: 'down', offset: 35 }}
                  delay={1.05}
                  transition={{ duration: 0.5 }}
                  className='relative flex h-full items-center justify-center'
                >
                  <TargetVisibilityRippleBg className='text-border pointer-events-none size-45 select-none' />

                  <div className='absolute top-1/2 -translate-y-1/2'>
                    <Avatar className='size-16 rounded-full shadow-lg after:rounded-full'>
                      <AvatarFallback className='bg-background text-primary shrink-0'>
                        <UserIcon className='size-8 stroke-1' />
                      </AvatarFallback>
                    </Avatar>
                    <Badge className='absolute top-0 right-0 size-5 rounded-full px-1'>
                      <PlusIcon className='size-2.5' />
                    </Badge>
                  </div>

                  <MotionPreset
                    fade
                    className='absolute top-8 left-15 -rotate-5'
                    motionProps={{
                      animate: {
                        y: [0, -10, 0],
                        opacity: 1
                      },
                      transition: {
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        },
                        opacity: {
                          duration: 0.5,
                          delay: 1.2
                        }
                      }
                    }}
                  >
                    <Badge className='bg-background text-foreground border-border h-auto gap-2.5 px-3 py-1.5 transition-shadow duration-200 hover:shadow-sm'>
                      <GraduationCapIcon className='size-3.5' />
                      Faculty
                    </Badge>
                  </MotionPreset>

                  <MotionPreset
                    fade
                    className='absolute bottom-10 left-10 rotate-5'
                    motionProps={{
                      animate: {
                        y: [0, -9, 0],
                        opacity: 1
                      },
                      transition: {
                        y: {
                          duration: 1.9,
                          repeat: Infinity,
                          ease: 'easeOut'
                        },
                        opacity: {
                          duration: 0.5,
                          delay: 1.35
                        }
                      }
                    }}
                  >
                    <Badge className='bg-background text-foreground border-border h-auto gap-2.5 px-3 py-1.5 transition-shadow duration-200 hover:shadow-sm'>
                      <UsersIcon className='size-3.5' />
                      HoD
                    </Badge>
                  </MotionPreset>

                  <MotionPreset
                    fade
                    className='absolute top-8 right-5 -rotate-10'
                    motionProps={{
                      animate: {
                        y: [0, -10, 0],
                        opacity: 1
                      },
                      transition: {
                        y: {
                          duration: 2.1,
                          repeat: Infinity,
                          ease: 'easeOut'
                        },
                        opacity: {
                          duration: 0.5,
                          delay: 1.5
                        }
                      }
                    }}
                  >
                    <Badge className='bg-background text-foreground border-border h-auto gap-2.5 px-3 py-1.5 transition-shadow duration-200 hover:shadow-sm'>
                      <ShieldCheckIcon className='size-3.5' />
                      Quality Cell
                    </Badge>
                  </MotionPreset>

                  <MotionPreset
                    fade
                    className='absolute right-12 bottom-10 rotate-10'
                    motionProps={{
                      animate: {
                        y: [0, -8, 0],
                        opacity: 1
                      },
                      transition: {
                        y: {
                          duration: 1.8,
                          repeat: Infinity,
                          ease: 'easeOut'
                        },
                        opacity: {
                          duration: 0.5,
                          delay: 1.65
                        }
                      }
                    }}
                  >
                    <Badge className='bg-background text-foreground border-border h-auto gap-2.5 px-3 py-1.5 transition-shadow duration-200 hover:shadow-sm'>
                      <CrownIcon className='size-3.5' />
                      Super Admin
                    </Badge>
                  </MotionPreset>
                </MotionPreset>

                <CardContent className='flex flex-col gap-4'>
                  <MotionPreset
                    component='h5'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={1.8}
                    inView={false}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold'
                  >
                    Role-Based Access
                  </MotionPreset>

                  <MotionPreset
                    component='p'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={1.95}
                    inView={false}
                    transition={{ duration: 0.5 }}
                    className='text-muted-foreground text-base'
                  >
                    Every user sees only the institutes, modules and menus assigned to their role - ensuring data security and compliance.
                  </MotionPreset>
                </CardContent>
              </Card>
            </MotionPreset>
          </div>

          {/* Column 2 */}
          <div className='flex h-full flex-col gap-6'>
            {/* Goals & Targets Card */}
            <MotionPreset fade slide={{ direction: 'down', offset: 35 }} transition={{ duration: 0.5 }}>
              <GoalAndTargetCard />
            </MotionPreset>

            {/* Sales & Growth Card */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
              className='grow'
            >
              <SalesGrowthCard />
            </MotionPreset>
          </div>

          {/* Column 3 */}
          <div className='flex flex-col gap-6 md:max-xl:col-span-2'>
            {/* Regular Updates Card */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 35 }}
              transition={{ duration: 0.5 }}
              className='flex-1'
            >
              <RegularUpdatesCard />
            </MotionPreset>
            {/* Customer Payments Card */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
              className='flex-1'
            >
              <Card className='h-full justify-between shadow-none'>
                <MotionPreset
                  fade
                  slide={{ direction: 'down', offset: 35 }}
                  delay={0.75}
                  transition={{ duration: 0.5 }}
                  className='flex flex-col gap-1'
                >
                  <Marquee pauseOnHover reverse duration={30} gap={0.5} className='px-2 py-1.5'>
                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-1.webp'
                          alt='Dr. Ananya Rao'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>AR</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>09:15</span>
                        <span className='text-sm'>Dr. A. Rao</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>

                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-2.webp'
                          alt='Prof. Rohan Mehta'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>RM</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>11:45</span>
                        <span className='text-sm'>Prof. R. Mehta</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>

                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-3.webp'
                          alt='Dr. Kavya Iyer'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>KI</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>14:45</span>
                        <span className='text-sm'>Dr. K. Iyer</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>
                  </Marquee>

                  <Marquee pauseOnHover duration={30} gap={0.5} className='px-2 py-1.5'>
                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-4.webp'
                          alt='Prof. Arjun Nair'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>AN</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>19:15</span>
                        <span className='text-sm'>Prof. A. Nair</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>

                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-5.webp'
                          alt='Dr. Sneha Kulkarni'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>SK</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>18:30</span>
                        <span className='text-sm'>Dr. S. Kulkarni</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>

                    <div className='flex w-58 items-center gap-3 rounded-xl border py-1.5 pr-3 pl-2 hover:shadow-md'>
                      <Avatar className='size-9.5 rounded-[12px] after:border-0'>
                        <AvatarImage
                          src='/images/avatar/avatar-6.webp'
                          alt='Prof. Vikram Shah'
                          className='rounded-[12px]'
                        />
                        <AvatarFallback className='text-xs'>VS</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col items-start gap-0.5'>
                        <span className='text-muted-foreground text-xs font-light'>09:15</span>
                        <span className='text-sm'>Prof. V. Shah</span>
                      </div>
                      <span className='text-green-600 dark:text-green-400'>Verified</span>
                    </div>
                  </Marquee>
                </MotionPreset>

                <CardContent className='flex flex-col gap-4'>
                  <MotionPreset
                    component='h5'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={0.9}
                    inView={false}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold'
                  >
                    Document Verification Workflow
                  </MotionPreset>

                  <MotionPreset
                    component='p'
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={1.05}
                    inView={false}
                    transition={{ duration: 0.5 }}
                    className='text-muted-foreground text-base'
                  >
                    Every approval, correction and rejection recorded with evidence - creating a complete audit trail
                    for accreditation readiness.
                  </MotionPreset>
                </CardContent>
              </Card>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
