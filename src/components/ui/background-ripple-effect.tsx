'use client'

// Util Imports
import { cn } from '@/lib/utils'

// Soft accent-colour glow behind hero sections (same colour and fade as the original ripple grid, without the grid).
const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56.815
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full object-center',
        '[--cell-fill-color:var(--accent)]',
        'dark:[--cell-fill-color:color-mix(in_oklab,var(--accent),black_22%)]'
      )}
    >
      <div className='relative flex h-auto w-auto justify-center overflow-hidden'>
        <div
          className='pointer-events-none relative z-[3] mx-auto mask-radial-from-20% mask-radial-at-top opacity-40'
          style={{
            width: cols * cellSize,
            height: rows * cellSize,
            backgroundColor: 'var(--cell-fill-color)'
          }}
        />
      </div>
    </div>
  )
}

export { BackgroundRippleEffect }
