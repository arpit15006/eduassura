// React Imports
import type { SVGAttributes } from 'react'

// EduAssura mark: a bold "E" inside the brand circle.
const FlowLogo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z'
        fill='var(--primary)'
      />
      <path
        d='M20.25 10.5H11.75V21.5H20.25M11.75 16H18.75'
        stroke='var(--primary-foreground)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default FlowLogo
