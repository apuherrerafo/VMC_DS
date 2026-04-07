import { useState, useRef, useEffect, useId, type ReactNode } from 'react'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: ReactNode
  placement?: TooltipPlacement
  delay?: number
  children: ReactNode
  className?: string
}

const PLACEMENT_CLASSES: Record<TooltipPlacement, { tip: string; arrow: string }> = {
  top:    { tip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',     arrow: 'top-full left-1/2 -translate-x-1/2 border-t-[var(--purple-900)] border-x-transparent border-b-0' },
  bottom: { tip: 'top-full left-1/2 -translate-x-1/2 mt-2',        arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-[var(--purple-900)] border-x-transparent border-t-0' },
  left:   { tip: 'right-full top-1/2 -translate-y-1/2 mr-2',       arrow: 'left-full top-1/2 -translate-y-1/2 border-l-[var(--purple-900)] border-y-transparent border-r-0' },
  right:  { tip: 'left-full top-1/2 -translate-y-1/2 ml-2',        arrow: 'right-full top-1/2 -translate-y-1/2 border-r-[var(--purple-900)] border-y-transparent border-l-0' },
}

export function Tooltip({
  content,
  placement = 'top',
  delay = 300,
  children,
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [rendered, setRendered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tooltipId = useId()
  const { tip, arrow } = PLACEMENT_CLASSES[placement]

  const show = () => {
    timerRef.current = setTimeout(() => { setRendered(true); setTimeout(() => setVisible(true), 10) }, delay)
  }
  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
    setTimeout(() => setRendered(false), 150)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <div
      className={['relative inline-flex', className].join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <div aria-describedby={visible ? tooltipId : undefined}>
        {children}
      </div>

      {rendered && (
        <div
          id={tooltipId}
          role="tooltip"
          className={[
            'absolute z-[var(--z-tooltip)] pointer-events-none',
            'px-2.5 py-1.5 max-w-[220px] w-max',
            'bg-[var(--purple-900)] text-white rounded-[var(--radius-btn)]',
            'font-[var(--font-body)] leading-snug',
            'shadow-[var(--shadow-lg)]',
            'transition-[opacity,transform] duration-150',
            tip,
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}
          style={{ fontSize: '11px' }}
        >
          {content}
          {/* Arrow */}
          <span
            className={['absolute border-4', arrow].join(' ')}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}

export default Tooltip
