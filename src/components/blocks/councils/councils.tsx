import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

export type Council = {
  name: string
  short: string
  logo?: string
  programmes: string
}

const Councils = ({ councils }: { councils: Council[] }) => {
  return (
    <section id='councils' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <p className='text-primary text-sm font-medium uppercase'>Every discipline</p>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Ready for Every Council’s Norms</h2>

          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            Medicine, engineering, pharmacy, nursing, agriculture or architecture - EduAssura keeps faculty and
            programme records for institutes regulated by each of these councils.
          </p>
        </MotionPreset>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {councils.map((council, index) => (
            <MotionPreset
              key={council.short}
              fade
              slide={{ direction: 'down', offset: 35 }}
              delay={0.1 * (index % 3)}
              transition={{ duration: 0.5 }}
            >
              <Card className='h-full shadow-none'>
                <CardContent className='flex items-start gap-4'>
                  <Avatar className='size-14 shrink-0 border bg-white after:border-0'>
                    {council.logo && (
                      <AvatarImage src={council.logo} alt={`${council.short} logo`} className='object-contain p-1' />
                    )}
                    <AvatarFallback className='bg-primary/10 text-primary text-xs font-semibold'>
                      {council.short}
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-1.5'>
                    <h3 className='text-lg leading-snug font-semibold'>
                      {council.name} <span className='text-muted-foreground font-normal'>({council.short})</span>
                    </h3>
                    <p className='text-muted-foreground text-sm'>{council.programmes}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>

        <p className='text-muted-foreground mt-8 text-center text-xs'>
          Council names and logos belong to their respective bodies and are shown for reference. EduAssura is not
          affiliated with or endorsed by them.
        </p>
      </div>
    </section>
  )
}

export default Councils
