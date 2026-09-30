'use client'

import { BlinkingParticles } from '@/components/ui/blinking-particles'

export type BackgroundProps = {
  background?: 'ripple' | 'gradient' | 'particles' | 'grid' | 'none'
}

export const IllustrationsBackground = ({ background = 'none' }: BackgroundProps) => {
  return background !== 'none' ? (
    <div className='absolute top-1/2 left-1/2 size-full max-h-88 max-w-88 -translate-x-1/2 -translate-y-1/2'>
      {background === 'ripple' && (
        <>
          <div className='border-border animation-duration-[2s] absolute top-1/2 left-1/2 -z-1 size-18 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border opacity-70' />
          <div className='border-border animation-duration-[2s] absolute top-1/2 left-1/2 -z-1 size-15 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border [animation-delay:0.3s]' />
        </>
      )}

      {background === 'gradient' && (
        <div className='absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--muted-foreground),transparent_50%)] opacity-20' />
      )}

      {background === 'grid' && (
        <div className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-muted)_1px,transparent_1px)] mask-[radial-gradient(ellipse_35%_35%_at_50%_50%,#000_60%,transparent_100%)] bg-size-[36px_36px]' />
      )}

      {background === 'particles' && (
        <div className='absolute -inset-6 rounded-full max-sm:-inset-4'>
          <BlinkingParticles quantity={30} color='#808080' size={1} ease={45} staticity={40} edgeBias={0.8} />
        </div>
      )}
    </div>
  ) : null
}
