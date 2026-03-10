'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Marquee() {
    const trackRef = useRef<HTMLDivElement>(null)

    const text =
        'USED BY 2,400+ MARKETING TEAMS  ›  AGENCIES  ›  IN-HOUSE TEAMS  ›  FREELANCERS  ›  STARTUPS  ›  CONSULTANCIES  ›    '
    const doubled = text + text

    return (
        <div
            style={{
                height: 44,
                background: 'var(--bg-dark)',
                overflow: 'hidden',
                position: 'relative',
            }}
            onMouseEnter={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
            }}
            onMouseLeave={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
            }}
        >
            <div
                ref={trackRef}
                style={{
                    display: 'flex',
                    animation: 'marquee 40s linear infinite',
                    whiteSpace: 'nowrap',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-inverse)',
                        opacity: 0.5,
                        padding: '0 24px',
                    }}
                >
                    {doubled}
                </span>
            </div>

            {/* Right stamp with pulse */}
            <motion.div
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 44,
                    height: 44,
                    background: 'var(--orange)',
                    zIndex: 10,
                }}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
            />
        </div>
    )
}
