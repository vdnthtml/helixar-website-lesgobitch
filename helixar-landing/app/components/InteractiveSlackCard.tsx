'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type State = 'idle' | 'generating' | 'result'

const mockData = (brand: string) => ({
    volume: `${Math.floor(Math.random() * 600 + 400)} posts/month`,
    engagement: `${(Math.random() * 3 + 2).toFixed(1)}%`,
    delta: `+${Math.floor(Math.random() * 20 + 5)}%`,
    format: ['Reels', 'Carousels', 'Short-form video', 'Long-form'][Math.floor(Math.random() * 4)],
    hook: ['"Before/After transformations"', '"Day in the life" content', '"Founder story" formats', '"Behind the scenes" series'][Math.floor(Math.random() * 4)],
    gaps: [
        ['User-generated content series', 'Micro-influencer collabs', 'Educational long-form'],
        ['Short-form product demos', 'Community Q&A posts', 'Trend reaction content'],
        ['Employee spotlight content', 'Tutorial series', 'Real-time event coverage'],
    ][Math.floor(Math.random() * 3)]
})

const generatingSteps = [
    'Scraping platforms...',
    'Analyzing content volume...',
    'Mapping engagement patterns...',
    'Identifying winning hooks...',
    'Generating brief...',
]

const defaultData = {
    volume: '847 posts/month',
    engagement: '4.2%',
    delta: '+12%',
    format: 'Reels',
    hook: '"Before/After transformations"',
    gaps: ['User-generated content series', 'Micro-influencer collabs', 'Educational long-form'],
}

export default function InteractiveSlackCard() {
    const [state, setState] = useState<State>('idle')
    const [inputVal, setInputVal] = useState('')
    const [brand, setBrand] = useState('Nike')
    const [data, setData] = useState(defaultData)
    const [progress, setProgress] = useState(0)
    const [generatingText, setGeneratingText] = useState('Scraping platforms...')

    const runReport = (brandName: string) => {
        if (!brandName.trim()) return
        setBrand(brandName.trim())
        setState('generating')
        setProgress(0)
        setInputVal('')

        let step = 0
        const interval = setInterval(() => {
            step++
            setProgress((step / generatingSteps.length) * 100)
            setGeneratingText(generatingSteps[step] || generatingSteps[generatingSteps.length - 1])
            if (step >= generatingSteps.length) {
                clearInterval(interval)
                setTimeout(() => {
                    setData(mockData(brandName))
                    setState('result')
                }, 400)
            }
        }, 520)
    }

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') runReport(inputVal)
    }

    const briefRows = [
        { dot: '#E1306C', label: 'Content Volume', value: data.volume },
        { dot: '#69C9D0', label: 'Avg Engagement', value: data.engagement, delta: data.delta },
        { dot: '#FF0000', label: 'Top Format', value: data.format },
        { dot: '#FAF9F7', label: 'Winning Hook', value: data.hook },
    ]

    return (
        <div style={{
            background: '#0D0C0A', borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(0,0,0,0.18)', width: '100%'
        }}>

            {/* Window chrome */}
            <div style={{
                height: 40, background: '#1A1816',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8
            }}>
                <div style={{ display: 'flex', gap: 6 }}>
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                        <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                    ))}
                </div>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 13,
                    color: 'rgba(250,249,247,0.7)', marginLeft: 8
                }}># marketing-intel</span>
            </div>

            {/* Messages */}
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 320 }}>

                {/* User message */}
                <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: 'var(--orange)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', flexShrink: 0
                    }}>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: '#fff' }}>YT</span>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>You</span>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>10:03 AM</span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#FAF9F7' }}>
                            <span style={{ color: 'var(--orange)' }}>@helixar</span> report {brand}
                        </p>
                    </div>
                </div>

                {/* Bot response */}
                <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: '#161412', border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <span style={{ color: 'var(--orange)', fontSize: 14, fontWeight: 700 }}>■</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>Helixar</span>
                            <span style={{
                                fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase',
                                background: 'rgba(255,94,44,0.25)', color: 'var(--orange)', padding: '1px 4px', borderRadius: 2
                            }}>APP</span>
                        </div>

                        <AnimatePresence mode="wait">
                            {state === 'generating' && (
                                <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                                    style={{
                                        background: '#1E1C19', border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: 6, padding: 14
                                    }}>
                                    <div style={{
                                        fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
                                        color: '#FAF9F7', marginBottom: 12
                                    }}>{brand} Competitor Brief</div>
                                    <div style={{
                                        height: 2, background: 'rgba(255,255,255,0.06)',
                                        borderRadius: 1, marginBottom: 12, overflow: 'hidden'
                                    }}>
                                        <motion.div style={{ height: '100%', background: 'var(--orange)', borderRadius: 1 }}
                                            animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#A09D9A' }}>{generatingText}</div>
                                    {[80, 60, 70, 55].map((w, i) => (
                                        <motion.div key={i} style={{
                                            height: 8, borderRadius: 4,
                                            background: 'rgba(255,255,255,0.06)', marginTop: 10, width: `${w}%`
                                        }}
                                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }} />
                                    ))}
                                </motion.div>
                            )}

                            {(state === 'idle' || state === 'result') && (
                                <motion.div key="result"
                                    initial={state === 'result' ? { opacity: 0, y: 8 } : false}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        background: '#1E1C19', border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: 6, padding: 14
                                    }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>
                                            {brand} Competitor Brief
                                        </span>
                                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>Generated just now</span>
                                    </div>

                                    <div style={{
                                        borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10,
                                        display: 'flex', flexDirection: 'column', gap: 8
                                    }}>
                                        {briefRows.map((row, i) => (
                                            <motion.div key={row.label}
                                                initial={state === 'result' ? { opacity: 0, x: -8 } : false}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.dot, flexShrink: 0 }} />
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase',
                                                    letterSpacing: '0.06em', color: '#A09D9A', width: 120, flexShrink: 0
                                                }}>{row.label}</span>
                                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>{row.value}</span>
                                                {row.delta && (
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: 11,
                                                        background: 'rgba(255,94,44,0.15)', color: 'var(--orange)',
                                                        padding: '1px 5px', borderRadius: 3
                                                    }}>{row.delta}</span>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 10, paddingTop: 10 }}>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase',
                                            letterSpacing: '0.06em', color: '#A09D9A', marginBottom: 6
                                        }}>TOP 3 GAPS VS YOUR BRAND:</div>
                                        {data.gaps.map((gap, i) => (
                                            <motion.div key={gap}
                                                initial={state === 'result' ? { opacity: 0 } : false}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                                                style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: '#6B6869', lineHeight: 1.8 }}>
                                                {gap}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                                        {['View Full Brief ↗', `Monitor ${brand}`, 'Export PDF'].map((label, i) => (
                                            <button key={label} style={{
                                                fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500,
                                                color: '#A09D9A', background: 'transparent',
                                                border: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                                                padding: '4px 10px', borderRadius: 4, cursor: 'pointer'
                                            }}>{label}</button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Input bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center', background: '#0D0C0A'
            }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--orange)', flexShrink: 0 }}>@helixar report</span>
                <input value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={handleKey}
                    placeholder="type a brand..." disabled={state === 'generating'}
                    style={{
                        flex: 1, background: 'transparent', border: 'none', outline: 'none',
                        fontFamily: 'var(--font-mono)', fontSize: 12, color: '#FAF9F7'
                    }} />
                <button onClick={() => runReport(inputVal)} disabled={state === 'generating' || !inputVal.trim()}
                    style={{
                        fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600,
                        background: state === 'generating' ? 'rgba(255,94,44,0.3)' : 'var(--orange)',
                        color: '#fff', border: 'none', padding: '5px 12px', borderRadius: 4,
                        cursor: state === 'generating' ? 'not-allowed' : 'pointer',
                        transition: 'all 150ms ease', flexShrink: 0
                    }}>
                    {state === 'generating' ? '...' : 'Run →'}
                </button>
            </div>

            <div style={{
                padding: '6px 16px 10px', fontFamily: 'var(--font-ui)', fontSize: 11,
                color: 'rgba(160,157,154,0.6)', textAlign: 'center'
            }}>
                Try it → type any brand and press Enter
            </div>
        </div>
    )
}
