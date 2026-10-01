'use client'

import { BookOpenTextIcon, CalendarDaysIcon, TrendingUpIcon } from 'lucide-react'

import { Bar, ComposedChart, Line, XAxis } from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { MotionPreset } from '@/components/ui/motion-preset'

import StatCard from '@/components/blocks/features//stat-card'

const chartData = [
  { time: 'Week 1', uv: 88, pv: 88 },
  { time: 'Week 2', uv: 88, pv: 88 },
  { time: 'Week 3', uv: 144, pv: 144 },
  { time: 'Week 4', uv: 144, pv: 144 },
  { time: 'Week 5', uv: 109, pv: 109 },
  { time: 'Week 6', uv: 102, pv: 109 },
  { time: 'Week 7', uv: 62, pv: 62 },
  { time: 'Week 8', uv: 62, pv: 62 },
  { time: 'Week 9', uv: 128, pv: 144 },
  { time: 'Week 10', uv: 144, pv: 144 },
  { time: 'Week 11', uv: 183, pv: 200 },
  { time: 'Week 12', uv: 200, pv: 200 }
]

const totalEarningChartConfig = {
  uv: {
    label: 'Verified',
    color: 'color-mix(in oklab, var(--primary) 20%, var(--background))'
  },
  pv: {
    label: 'Submitted',
    color: 'var(--primary)'
  }
} satisfies ChartConfig

const SalesGrowthCard = () => {
  return (
    <Card className='h-full justify-between gap-11 shadow-none'>
      <div className='flex flex-col gap-8'>
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 35 }}
          delay={0.75}
          transition={{ duration: 0.5 }}
          className='px-6'
        >
          <StatCard
            avatarIcon={<TrendingUpIcon className='size-4' />}
            title='Verified this quarter'
            statNumber='1,150'
            percentage={5}
            className='w-full p-6 shadow-lg'
          />
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 35 }}
          delay={0.9}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground flex flex-col gap-4 py-6 text-sm'
        >
          <CardContent className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center justify-between gap-2 py-2'>
                <div className='flex items-center gap-2'>
                  <BookOpenTextIcon className='size-4' />
                  <span>Research & Patents</span>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <span className='font-medium'>412</span>
                  <span className='text-card-foreground'>+12.6%</span>
                </div>
              </div>
              <div className='flex items-center justify-between gap-2 py-2'>
                <div className='flex items-center gap-2'>
                  <CalendarDaysIcon className='size-4' />
                  <span>Events & activities</span>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <span className='font-medium'>286</span>
                  <span className='text-card-foreground'>-4.2%</span>
                </div>
              </div>
            </div>
            <div>
              <Separator />
            </div>
          </CardContent>
          <MotionPreset fade slide={{ direction: 'down', offset: 35 }} delay={1.05} transition={{ duration: 0.5 }}>
            <ChartContainer config={totalEarningChartConfig} className='h-39.25 w-full'>
              <ComposedChart data={chartData} margin={{ top: 4, right: 0, left: 0 }}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <XAxis
                  dataKey='time'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={15}
                  tick={{ fontSize: 14, fill: 'var(--muted-foreground)' }}
                />
                <Bar dataKey='uv' barSize={16} fill='var(--color-uv)' radius={2} />
                <Line type='linear' dataKey='pv' stroke='var(--color-pv)' dot={false} strokeWidth={3} />
              </ComposedChart>
            </ChartContainer>
          </MotionPreset>
        </MotionPreset>
      </div>

      <CardContent className='flex flex-col gap-4'>
        <MotionPreset
          component='h5'
          fade
          slide={{ direction: 'down', offset: 35 }}
          delay={1.2}
          inView={false}
          transition={{ duration: 0.5 }}
          className='text-2xl font-semibold'
        >
          Data Collection & Validation
        </MotionPreset>
        <MotionPreset
          component='p'
          fade
          slide={{ direction: 'down', offset: 35 }}
          delay={1.35}
          inView={false}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground text-base'
        >
          Track institutional data submissions and quality cell validations, week by week, across every module.
        </MotionPreset>
      </CardContent>
    </Card>
  )
}

export default SalesGrowthCard
