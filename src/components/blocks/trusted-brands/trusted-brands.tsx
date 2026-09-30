import { Card, CardContent } from '@/components/ui/card'

import { Marquee } from '@/components/ui/marquee'

export type brandLogos = {
  image: string
  name: string
}

const TrustedBrands = ({ brandLogos }: { brandLogos: brandLogos[] }) => {
  return (
    <section id='trusted-brands' className='py-4 sm:py-6 lg:py-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-4 space-y-4 text-center sm:mb-6 lg:mb-8'>
          <p className='text-muted-foreground text-xl'>Our trusted university partner</p>
        </div>

        {/* Few partners: show them still and in full colour. Three or more: scrolling marquee. */}
        {brandLogos.length < 3 ? (
          <div className='flex flex-wrap items-center justify-center gap-6 pb-4'>
            {brandLogos.map((logo, index) => (
              <div key={index} className='rounded-xl border bg-white px-8 py-5 shadow-sm'>
                <img src={logo.image} alt={logo.name} className='h-14 w-auto' />
              </div>
            ))}
          </div>
        ) : (
          <div className='relative'>
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent' />
            <div className='w-full overflow-hidden'>
              <Marquee pauseOnHover duration={20} gap={1.5}>
                {brandLogos.map((logo, index) => (
                  <Card key={index} className='bg-transparent py-9 shadow-none ring-0'>
                    <CardContent className='flex flex-col items-center px-9'>
                      <img src={logo.image} alt={logo.name} className='h-6 opacity-75 grayscale dark:invert' />
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TrustedBrands
