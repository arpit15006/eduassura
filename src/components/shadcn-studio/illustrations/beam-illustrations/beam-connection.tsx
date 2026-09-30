'use client'

import * as React from 'react'

import { useAnimate } from 'motion/react'

import { IllustrationsBackground } from '@/components/shadcn-studio/illustrations/illustrations-background'

import { cn } from '@/lib/utils'

type Curvature = number | [number, number]

// Under an isometric container (`rotateX/rotateZ`), the SVG drawing the beam is itself a
// descendant of that same rotated container, so it gets the same rotation applied again on
// paint. getBoundingClientRect() deltas already have that rotation baked in once (from the
// ambient transform), so drawing the path with them would rotate it a second time. Reading the
// container's own CSS transform and undoing it compensates for that without disturbing anchors
// that rely on their own `transform: translate(...)` for centering (getBoundingClientRect already
// resolves those correctly, unlike layout-only properties such as offsetLeft/offsetTop).
//
// This can't use DOMMatrix's own 3D `.inverse()`: a screen-space (x, y) delta only carries the
// x/y output of the container's 3D rotation — its z output was discarded by the browser's
// orthographic projection when painting. Full-matrix inversion assumes that missing z is 0, which
// is wrong (it generally isn't) and, since our rotation matrix is orthogonal, makes `.inverse()`
// equal to `.transpose()` — not what undoes the projection. What we actually want is the inverse
// of just the top-left 2x2 submatrix, i.e. the 2D map the rotation induces on points that started
// in the z=0 plane (which every element here does, before the container rotates it).
const getAmbientRotationInverse = (container: HTMLElement) => {
  const transform = getComputedStyle(container).transform

  if (!transform || transform === 'none') return null

  try {
    const { m11, m12, m21, m22 } = new DOMMatrix(transform)
    const det = m11 * m22 - m21 * m12

    if (!det) return null

    return (x: number, y: number) => ({
      x: (m22 * x - m21 * y) / det,
      y: (-m12 * x + m11 * y) / det
    })
  } catch {
    return null
  }
}

export interface ConnectionBeamProps {
  className?: string
  containerRef: React.RefObject<HTMLElement | null>
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  pathType?: 'solid' | 'dashed'
  pathDash?: number | string
  curvature?: Curvature
  bendAt?: number
  beamType?: 'gradient' | 'dot' | 'spike' | 'none'
  beamColor?: string
  beamSize?: number
  beamCount?: number
  gradientStartColor?: string
  gradientStopColor?: string
  duration?: number
  delay?: number
  travelRatio?: number
  reverse?: boolean
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  active?: boolean
  visible?: boolean
}

interface BeamPlayback {
  time: number
  play: () => void
  pause: () => void
  stop: () => void
}

export const ConnectionBeam = (props: ConnectionBeamProps) => {
  const {
    className,
    containerRef,
    fromRef,
    toRef,
    pathColor = 'currentColor',
    pathWidth = 1,
    pathOpacity = 0.2,
    pathType = 'solid',
    pathDash = 4,
    curvature = 0,
    bendAt = 0.5,
    beamType = 'gradient',
    beamColor = 'var(--primary)',
    beamSize,
    beamCount = 1,
    gradientStartColor = 'var(--destructive)',
    gradientStopColor = 'currentColor',
    duration,
    delay = 0,
    travelRatio = 1,
    reverse = false,
    startXOffset = 0,
    startYOffset = 0,
    endXOffset = 0,
    endYOffset = 0,
    active = true,
    visible = true
  } = props

  const durationRef = React.useRef(duration ?? Math.random() * 3 + 4)
  const resolvedDuration = duration ?? durationRef.current

  const id = React.useId()
  const [scope, animate] = useAnimate<SVGSVGElement>()
  const pathRef = React.useRef<SVGPathElement>(null)
  const gradientRef = React.useRef<SVGLinearGradientElement>(null)
  const gradientPlaybackRef = React.useRef<BeamPlayback | null>(null)
  const [pathD, setPathD] = React.useState('')
  const [pathLength, setPathLength] = React.useState(0)
  const [svgDimensions, setSvgDimensions] = React.useState({ width: 0, height: 0 })

  const [startBend, endBend] = Array.isArray(curvature) ? curvature : [curvature, curvature]

  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%']
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%']
      }

  React.useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const container = containerRef.current

        setSvgDimensions({ width: container.offsetWidth, height: container.offsetHeight })

        const containerRect = container.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        // Reference everything off the CENTERS of the (possibly rotated) rects, not their
        // top-left corners. A rotated rectangle's screen-space AABB has its corners shuffled by
        // the rotation (a nonlinear min/max), so corner-to-corner deltas don't correspond to any
        // consistent rotation of the pre-transform layout — but its AABB *center* always equals
        // the rotated position of the original center exactly, since the container rotates around
        // its own center (transform-origin: center). That keeps the center-to-center delta a
        // clean linear function of the container's rotation, which the inverse below can undo.
        const containerCenterX = containerRect.left + containerRect.width / 2
        const containerCenterY = containerRect.top + containerRect.height / 2

        let startX = rectA.left + rectA.width / 2 - containerCenterX
        let startY = rectA.top + rectA.height / 2 - containerCenterY
        let endX = rectB.left + rectB.width / 2 - containerCenterX
        let endY = rectB.top + rectB.height / 2 - containerCenterY

        const inverse = getAmbientRotationInverse(container)

        if (inverse) {
          const start = inverse(startX, startY)
          const end = inverse(endX, endY)

          startX = start.x
          startY = start.y
          endX = end.x
          endY = end.y
        }

        // Shift from container-center-relative back to container-top-left-relative, matching the
        // SVG's own local origin.
        startX += container.offsetWidth / 2 + startXOffset
        startY += container.offsetHeight / 2 + startYOffset
        endX += container.offsetWidth / 2 + endXOffset
        endY += container.offsetHeight / 2 + endYOffset

        const dx = endX - startX
        const dy = endY - startY

        // Bend in screen space (vertical offset), not perpendicular to the line — so beams
        // fanning out from a shared center in different directions all bow consistently
        // (positive curvature up, negative down) instead of tilting relative to each path's angle.
        const c1x = startX + dx * bendAt
        const c1y = startY + dy * bendAt - startBend
        const c2x = endX - dx * bendAt
        const c2y = endY - dy * bendAt - endBend

        setPathD(`M ${startX},${startY} C ${c1x},${c1y} ${c2x},${c2y} ${endX},${endY}`)
      }
    }

    const resizeObserver = new ResizeObserver(() => updatePath())

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    updatePath()

    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef, fromRef, toRef, startBend, endBend, bendAt, startXOffset, startYOffset, endXOffset, endYOffset])

  React.useEffect(() => {
    if (pathRef.current && pathD) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [pathD])

  // SMIL `begin`/`dur` offsets on an inline <svg> resolve against the browser's shared page
  // timeline (roughly, time since the page loaded), not against when this particular <svg>
  // happened to mount. Two beams with different `begin` values stay correctly spaced relative to
  // EACH OTHER, but which point in their shared cycle is showing at the moment someone actually
  // looks at the page is otherwise arbitrary - e.g. a beam with `delay={3}` can appear to fire
  // before one with no delay, simply because the page's clock was already partway through a cycle
  // when they came into view. Resetting this SVG's own clock to zero the instant it activates
  // gives its `begin`/`delay` offsets a real, known zero to count from, so the very first play
  // lines up the same way every later cycle already does.
  const hasSyncedClockRef = React.useRef(false)

  React.useEffect(() => {
    if (!active) {
      hasSyncedClockRef.current = false

      return
    }

    if ((beamType === 'dot' || beamType === 'spike') && pathLength > 0 && !hasSyncedClockRef.current) {
      scope.current?.setCurrentTime(0)
      hasSyncedClockRef.current = true
    }
  }, [active, beamType, pathLength, scope])

  const spikeGradientId = `${id}-spike`
  const travellerSize = beamSize ?? 3

  React.useEffect(() => {
    if (beamType !== 'gradient' || !gradientRef.current) return

    const playback = animate(
      gradientRef.current,
      {
        x1: gradientCoordinates.x1,
        x2: gradientCoordinates.x2,
        y1: gradientCoordinates.y1,
        y2: gradientCoordinates.y2
      },
      { delay, duration: resolvedDuration, ease: 'linear', repeat: Infinity, repeatDelay: 0 }
    )

    if (!active) playback.pause()

    gradientPlaybackRef.current = playback

    return () => playback.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beamType, reverse, resolvedDuration, delay, animate])

  React.useEffect(() => {
    const playback = gradientPlaybackRef.current

    if (!playback) return

    if (active) playback.play()
    else playback.pause()
  }, [active])

  // A larger, low-opacity halo circle riding the same <animateMotion> as the solid dot — a soft
  // "shadow" behind the dot without the SVG filter route, whose region degenerates to near-zero on
  // the mostly-straight connector paths used here (same objectBoundingBox issue noted below for
  // the spike gradient).
  const dotTravellers = pathLength > 0 && beamType === 'dot' && active && (
    <>
      {Array.from({ length: Math.max(1, beamCount) }, (_, index) => {
        const begin = delay + (index * resolvedDuration) / Math.max(1, beamCount)

        // travelRatio < 1 reserves the tail of each `dur`-length cycle as a hold at the
        // endpoint (hidden behind the node sitting on top of it) instead of restarting
        // immediately - lets a beam wait out a sibling beam's own leg of a multi-hop
        // flow (e.g. hub -> spokes) so the whole trip stays a single sequential loop
        // instead of overlapping with the next one.
        const hasHold = travelRatio < 1
        const [from, to] = reverse ? ['1', '0'] : ['0', '1']

        const motionProps = {
          dur: `${resolvedDuration}s`,
          begin: `${begin}s`,
          repeatCount: 'indefinite',
          path: pathD,
          ...(reverse || hasHold
            ? {
                keyPoints: hasHold ? `${from};${to};${to}` : `${from};${to}`,
                keyTimes: hasHold ? `0;${travelRatio};1` : '0;1',
                calcMode: 'linear'
              }
            : {})
        }

        return (
          <g key={index} fill={beamColor}>
            <circle r={travellerSize * 2} fillOpacity={0.15}>
              <animateMotion {...motionProps} />
            </circle>
            <circle r={travellerSize}>
              <animateMotion {...motionProps} />
            </circle>
          </g>
        )
      })}
    </>
  )

  // A short tail + head riding an <animateMotion> along the same path, with rotate='auto' so the
  // tail always points back along the local tangent — this stays correct through curves, unlike a
  // dasharray dash (whose color/width can't vary along its own length).
  const spikeTailLength = beamSize ?? 18
  const spikeHeadRadius = Math.max(1.5, spikeTailLength / 9)

  const spikeTravellers = pathLength > 0 && beamType === 'spike' && active && (
    <>
      {Array.from({ length: Math.max(1, beamCount) }, (_, index) => {
        const begin = delay + (index * resolvedDuration) / Math.max(1, beamCount)

        // Same hold behavior as the dot traveller below: travelRatio < 1 reserves the tail of
        // each `dur`-length cycle as a hold at the endpoint instead of sliding continuously across
        // the full duration and looping instantly - without this, `delay`/`travelRatio` math for a
        // multi-hop flow (e.g. hub -> spokes) can't keep beams from overlapping mid-flight, since
        // every spike would always be in motion somewhere on its path.
        const hasHold = travelRatio < 1
        const [from, to] = reverse ? ['1', '0'] : ['0', '1']

        return (
          <g key={index} fill={beamColor}>
            <animateMotion
              dur={`${resolvedDuration}s`}
              begin={`${begin}s`}
              repeatCount='indefinite'
              rotate='auto'
              path={pathD}
              {...(reverse || hasHold
                ? {
                    keyPoints: hasHold ? `${from};${to};${to}` : `${from};${to}`,
                    keyTimes: hasHold ? `0;${travelRatio};1` : '0;1',
                    calcMode: 'linear'
                  }
                : {})}
            />
            <line
              x1={-spikeTailLength}
              y1={0}
              x2={0}
              y2={0}
              stroke={`url(#${spikeGradientId})`}
              strokeWidth={Math.max(1, pathWidth + 0.5)}
              strokeLinecap='round'
            />
            <circle r={spikeHeadRadius} fill={beamColor} />
          </g>
        )
      })}
    </>
  )

  return (
    <svg
      ref={scope}
      fill='none'
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns='http://www.w3.org/2000/svg'
      className={cn('pointer-events-none absolute top-0 left-0 transform-gpu stroke-2', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        ref={pathRef}
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap='round'
        strokeDasharray={pathType === 'dashed' ? pathDash : undefined}
      />
      {/* Kept mounted (and animating) whenever `active`, independent of `visible` — hover reveals
          a beam already mid-cycle instead of restarting it, so hidden and revealed beams share one
          continuous loop. */}
      <g className={cn('transition-opacity duration-300', visible ? 'opacity-100' : 'opacity-0')}>
        {beamType === 'gradient' && (
          <path d={pathD} stroke={`url(#${id})`} strokeWidth={pathWidth} strokeOpacity='1' strokeLinecap='round' />
        )}
        {dotTravellers}
        {spikeTravellers}
      </g>
      {beamType === 'gradient' && (
        <defs>
          <linearGradient
            ref={gradientRef}
            className='transform-gpu'
            id={id}
            gradientUnits='userSpaceOnUse'
            x1='0%'
            x2='0%'
            y1='0%'
            y2='0%'
          >
            <stop stopColor={gradientStartColor} stopOpacity='0' />
            <stop stopColor={gradientStartColor} />
            <stop offset='32.5%' stopColor={gradientStopColor} />
            <stop offset='100%' stopColor={gradientStopColor} stopOpacity='0' />
          </linearGradient>
        </defs>
      )}
      {beamType === 'spike' && (
        <defs>
          {/* userSpaceOnUse — the tail line is horizontal (y1 === y2), so its bounding box has
              zero height and an objectBoundingBox gradient would be invisible on it. */}
          <linearGradient
            id={spikeGradientId}
            gradientUnits='userSpaceOnUse'
            x1={-spikeTailLength}
            y1={0}
            x2={0}
            y2={0}
          >
            <stop offset='0%' stopColor={beamColor} stopOpacity='0' />
            <stop offset='100%' stopColor={beamColor} stopOpacity='1' />
          </linearGradient>
        </defs>
      )}
    </svg>
  )
}

export interface BeamLine extends Omit<ConnectionBeamProps, 'containerRef' | 'fromRef' | 'toRef' | 'active'> {
  from: number
  to?: number
}

export interface BeamConnectionRenderProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  active: boolean
  visible: boolean
}

export interface BeamConnectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  sources?: React.ReactNode[]
  target?: React.ReactNode
  beams?: BeamLine[]
  background?: 'ripple' | 'gradient' | 'particles' | 'grid' | 'none'
  layout?: 'horizontal' | 'vertical'
  nodeClassName?: string
  targetClassName?: string
  isometric?: boolean
  trigger?: 'default' | 'beam' | 'hover'

  /**
   * With `sources`/`target` omitted, BeamConnection skips its built-in node grid and hands the
   * container ref + resolved `active` state to a custom layout instead — for illustrations whose
   * node arrangement doesn't fit the sources/target grid (e.g. a symmetric hub of nodes around a
   * center), while still getting the shared background/isometric/trigger plumbing for free.
   */
  children?: React.ReactNode | ((render: BeamConnectionRenderProps) => React.ReactNode)
  pathColor?: ConnectionBeamProps['pathColor']
  pathWidth?: ConnectionBeamProps['pathWidth']
  pathOpacity?: ConnectionBeamProps['pathOpacity']
  pathType?: ConnectionBeamProps['pathType']
  beamType?: ConnectionBeamProps['beamType']
  beamColor?: ConnectionBeamProps['beamColor']
  beamSize?: ConnectionBeamProps['beamSize']
  beamCount?: ConnectionBeamProps['beamCount']
  curvature?: ConnectionBeamProps['curvature']
  bendAt?: ConnectionBeamProps['bendAt']
  duration?: ConnectionBeamProps['duration']
  delay?: ConnectionBeamProps['delay']
  reverse?: ConnectionBeamProps['reverse']
}

export const BeamConnection = React.forwardRef<HTMLDivElement, BeamConnectionProps>((props, forwardedRef) => {
  const {
    sources,
    target,
    beams,
    background = 'none',
    layout = 'horizontal',
    nodeClassName,
    targetClassName,
    isometric = false,
    trigger = 'beam',
    className,
    style,
    children,
    pathColor,
    pathWidth,
    pathOpacity,
    pathType,
    beamType,
    beamColor,
    beamSize,
    beamCount,
    curvature,
    bendAt,
    duration,
    delay,
    reverse,
    ...rest
  } = props

  const isCustomLayout = sources === undefined && target === undefined

  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = React.useState(false)

  // 'hover' keeps the beam animation running (`active`) at all times so it never restarts from
  // scratch on hover — only its on-screen visibility (`visible`) follows the hover state.
  const active = trigger !== 'default'
  const visible = trigger === 'hover' ? isHovering : active

  const sourceRefs = React.useMemo(
    () => (sources ?? []).map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sources?.length]
  )

  const targetRef = React.useRef<HTMLDivElement>(null)

  const sharedBeamProps = {
    pathColor,
    pathWidth,
    pathOpacity,
    pathType,
    beamType,
    beamColor,
    beamSize,
    beamCount,
    curvature,
    bendAt,
    duration,
    delay,
    reverse,
    active,
    visible
  }

  const resolvedBeams: BeamLine[] = isCustomLayout
    ? []
    : (beams ?? (sources ?? []).map((_, index) => ({ from: index })))

  return (
    <div
      ref={node => {
        containerRef.current = node
        if (typeof forwardedRef === 'function') forwardedRef(node)
        else if (forwardedRef) forwardedRef.current = node
      }}
      style={{ ...style, ...(isometric && { transform: 'rotateX(45deg) rotateZ(-45deg)' }) }}
      className={cn(
        'relative',
        !isCustomLayout && ['flex items-center justify-between gap-5', { 'flex-col': layout === 'vertical' }],
        className
      )}
      onMouseEnter={() => trigger === 'hover' && setIsHovering(true)}
      onMouseLeave={() => trigger === 'hover' && setIsHovering(false)}
      {...rest}
    >
      <IllustrationsBackground background={background} />
      {isCustomLayout ? (
        typeof children === 'function' ? (
          children({ containerRef, active, visible })
        ) : (
          children
        )
      ) : (
        <>
          <div className={cn('z-1 flex gap-4', layout === 'vertical' ? 'flex-row' : 'flex-col')}>
            {sources?.map((source, index) => (
              <div
                key={index}
                ref={sourceRefs[index]}
                className={cn(
                  'bg-background grid size-10 place-content-center rounded-xl border p-2 shadow-sm',
                  nodeClassName
                )}
              >
                {source}
              </div>
            ))}
          </div>
          <div
            ref={targetRef}
            className={cn('bg-background z-1 grid place-content-center rounded-xl border shadow-sm', targetClassName)}
          >
            {target}
          </div>
          {resolvedBeams.map((beam, index) => {
            const { from, to, ...beamOverrides } = beam
            const fromRef = sourceRefs[from]

            if (!fromRef) return null

            const toRef = to === undefined ? targetRef : (sourceRefs[to] ?? targetRef)

            return (
              <ConnectionBeam
                key={index}
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={toRef}
                {...sharedBeamProps}
                {...beamOverrides}
              />
            )
          })}
          {typeof children !== 'function' ? children : null}
        </>
      )}
    </div>
  )
})

BeamConnection.displayName = 'BeamConnection'
