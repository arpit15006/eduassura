import type { SVGAttributes } from 'react'

// Large, cropped EduAssura shield mark used as decoration in the CTA card corners.
// `flip` places it for the right-hand corner (tilted the other way, without mirroring the check).
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
          d='M16 6.5L23.5 9.3V15.1C23.5 19.9 20.4 23.6 16 25.5C11.6 23.6 8.5 19.9 8.5 15.1V9.3L16 6.5Z'
          fill='white'
        />
        <path
          d='M12.4 15.9L15 18.5L19.9 13.3'
          stroke='var(--primary)'
          strokeWidth='2.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default LogoVector
