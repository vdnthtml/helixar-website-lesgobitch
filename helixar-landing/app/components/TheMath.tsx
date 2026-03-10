'use client'

import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

export default function TheMath() {
    const oldSteps = [
        'Open Sprout Social', 'Export CSV (wait 3 mins)', 'Open Google Sheets',
        'Paste and format data', 'Open ChatGPT', 'Write the prompt',
        'Copy output to Notion', 'Format and send to client',
    ]

    const briefRows = [
        { dot: '#E1306C', label: 'Volume', value: '847/mo' },
        { dot: '#69C9D0', label: 'Engagement', value: '4.2%' },
        { dot: '#FF0000', label: 'Top Format', value: 'Reels' },
    ]

    return (
        <motion.section
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}
        >
            <div className="bg-word bg-word-dark">FASTER</div>

            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: 'var(--max-width)', margin: '0 auto',
                paddingTop: 96, paddingBottom: 96,
                paddingLeft: 'var(--content-pad)', paddingRight: 'var(--content-pad)',
            }}>
                <FadeUp delay={0}>
                    <div className="ticket-label-dark">THE OLD WAY</div>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div style={{
                        marginTop: 16, fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(64px,7vw,88px)', lineHeight: 0.9,
                        color: 'var(--text-inverse)',
                    }}>
                        3 HOURS BECOMES 4 MINUTES.
                    </div>
                </FadeUp>

                <FadeUp delay={0.16}>
                    <p style={{ marginTop: 16, fontFamily: 'var(--font-ui)', fontSize: 16, color: 'var(--text-inverse-body)' }}>
                        Every week. For every competitor. For every client.
                    </p>
                </FadeUp>

                {/* Two columns */}
                <div style={{
                    marginTop: 64, paddingTop: 64,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
                }}>
                    {/* LEFT */}
                    <FadeUp delay={0.1}>
                        <div>
                            <ol style={{ listStyle: 'none', padding: 0 }}>
                                {oldSteps.map((item, i) => (
                                    <li key={item} style={{
                                        fontFamily: 'var(--font-ui)', fontSize: 14,
                                        color: 'var(--text-inverse-body)', lineHeight: 2.4,
                                        display: 'flex', gap: 16,
                                    }}>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)', fontSize: 12,
                                            color: 'var(--text-inverse-muted)', flexShrink: 0, width: 16,
                                        }}>{i + 1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                            <div style={{
                                marginTop: 28, fontFamily: 'var(--font-mono)',
                                fontSize: 24, fontWeight: 500, color: 'var(--text-inverse-body)',
                            }}>⏱ 3 hours</div>
                        </div>
                    </FadeUp>

                    {/* RIGHT */}
                    <FadeUp delay={0.2}>
                        <div>
                            <div className="command-block">
                                <span className="prompt">&gt;</span> @helixar report Nike
                            </div>

                            <div style={{
                                marginTop: 20, background: '#161412',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: 12, padding: 16,
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>Nike Brief</span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#A09D9A' }}>4 min</span>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    {briefRows.map(r => (
                                        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.dot, flexShrink: 0 }} />
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', color: '#A09D9A', width: 90, flexShrink: 0 }}>{r.label}</span>
                                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>{r.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                marginTop: 24, fontFamily: 'var(--font-mono)',
                                fontSize: 'clamp(48px,5vw,64px)', fontWeight: 700,
                                color: 'var(--orange)',
                            }}>⏱ 4 minutes</div>
                        </div>
                    </FadeUp>
                </div>

                {/* Caption */}
                <FadeUp delay={0.3}>
                    <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 15, fontStyle: 'italic', color: 'var(--text-inverse-body)' }}>
                            That&apos;s 2h 56min you just got back. Every week.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </motion.section>
    )
}
