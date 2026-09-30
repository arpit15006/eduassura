// React Imports
import type { SVGAttributes } from 'react'

// EduAssura mark: a shield with a check inside the brand circle.
const FlowLogo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z'
        fill='var(--primary)'
      />
      <path
        d='M16 6.5L23.5 9.3V15.1C23.5 19.9 20.4 23.6 16 25.5C11.6 23.6 8.5 19.9 8.5 15.1V9.3L16 6.5Z'
        fill='var(--primary-foreground)'
      />
      <path
        d='M12.4 15.9L15 18.5L19.9 13.3'
        stroke='var(--primary)'
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default FlowLogo
