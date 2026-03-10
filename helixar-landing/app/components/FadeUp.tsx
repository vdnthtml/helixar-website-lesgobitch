'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeUpProps {
    children: React.ReactNode
    delay?: number
    className?: string
    style?: React.CSSProperties
}

export default function FadeUp({ children, delay = 0, className, style }: FadeUpProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
        >
            {children}
        </motion.div>
    )
}
