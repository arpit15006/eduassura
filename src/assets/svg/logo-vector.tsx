import type { SVGAttributes } from 'react'

// Large, cropped EduAssura "E" mark used as decoration in the CTA card corners.
// `flip` places it for the right-hand corner (tilted the other way, without mirroring the letter).
const LogoVector = ({ flip, ...props }: SVGAttributes<SVGElement> & { flip?: boolean }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='217' height='184' viewBox='0 0 217 184' fill='none' {...props}>
      <g
        opacity='0.3'
        transform={
          flip ? 'rotate(12 141 131) translate(21 11) scale(7.5)' : 'rotate(-12 76 131) translate(-44 11) scale(7.5)'
        }
      >
        <path
          d='M20.25 10.5H11.75V21.5H20.25M11.75 16H18.75'
          stroke='white'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default LogoVector
