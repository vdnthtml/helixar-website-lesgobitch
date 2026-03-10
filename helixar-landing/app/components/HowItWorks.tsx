'use client'

import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

export default function HowItWorks() {
    const rows = [
        {
            step: '01',
            command: '@helixar report [brand]',
            headline: 'A full competitor brief in under 5 minutes.',
            body: 'Helixar scrapes 6 platforms simultaneously and generates a ranked brief — content volume, engagement rates, top formats, winning hooks, and your specific content gaps.',
            textSide: 'left' as const,
            bg: 'var(--bg-base)',
            screenshot: 'brief' as const,
            floatDelay: 0,
        },
        {
            step: '02',
            command: '@helixar monitor [brand]',
            headline: 'Never miss a competitor move.',
            body: 'Set monitoring for any brand. A weekly digest lands in Slack every Monday — spikes, new campaigns, follower shifts, anything that changed in the last 7 days.',
            textSide: 'right' as const,
            bg: 'var(--bg-alt)',
            screenshot: 'monitor' as const,
            floatDelay: 1.3,
        },
        {
            step: '03',
            command: '@helixar what do we know about [brand]?',
            headline: "Everything it\u2019s ever learned. Instantly recalled.",
            body: "Every data point from your first report to today — campaign shifts, platform changes — cross-referenced and searchable in seconds. It never starts from zero.",
            textSide: 'left' as const,
            bg: 'var(--bg-base)',
            screenshot: 'memory' as const,
            floatDelay: 0.7,
        },
    ]

    return (
        <section id="how-it-works" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
                background: 'var(--bg-base)',
                paddingTop: 96, paddingBottom: 72,
                paddingLeft: 'var(--content-pad)', paddingRight: 'var(--content-pad)',
                maxWidth: 'var(--max-width)', margin: '0 auto',
                position: 'relative', zIndex: 1,
            }}>
                <div className="bg-word">COMMANDS</div>

                <FadeUp delay={0}>
                    <div className="ticket-label">HOW IT WORKS</div>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div style={{
                        marginTop: 16, fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(60px,7vw,88px)', lineHeight: 0.9,
                        color: 'var(--text-primary)',
                    }}>
                        <div>THREE COMMANDS.</div>
                        <div>THAT&apos;S THE <span className="stamp">WHOLE PRODUCT.</span></div>
                    </div>
                </FadeUp>

                <FadeUp delay={0.16}>
                    <p style={{
                        marginTop: 16, fontFamily: 'var(--font-ui)',
                        fontSize: 16, color: 'var(--text-body)',
                    }}>
                        No dashboards. No onboarding. Just type in Slack.
                    </p>
                </FadeUp>
            </div>

            {/* Rows */}
            {rows.map((row) => {
                const textCol = (
                    <div key="text">
                        <FadeUp delay={0}>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: 11,
                                textTransform: 'uppercase', letterSpacing: '0.1em',
                                color: 'var(--text-muted)',
                            }}>{row.step}</div>
                        </FadeUp>

                        <FadeUp delay={0.06}>
                            <div className="command-block" style={{ marginTop: 8 }}>
                                <span className="prompt">&gt;</span> {row.command}
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.12}>
                            <h3 style={{
                                marginTop: 20, fontFamily: 'var(--font-ui)',
                                fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700,
                                color: 'var(--text-primary)', letterSpacing: '-0.02em',
                                lineHeight: 1.2,
                            }}>{row.headline}</h3>
                        </FadeUp>

                        <FadeUp delay={0.18}>
                            <p style={{
                                marginTop: 12, fontFamily: 'var(--font-ui)',
                                fontSize: 15, color: 'var(--text-body)',
                                lineHeight: 1.65, maxWidth: 420,
                            }}>{row.body}</p>
                        </FadeUp>
                    </div>
                )

                const screenshotCol = (
                    <FadeUp key="screenshot" delay={0.10}>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: row.floatDelay }}
                        >
                            {row.screenshot === 'brief' && <BriefScreenshot />}
                            {row.screenshot === 'monitor' && <MonitorScreenshot />}
                            {row.screenshot === 'memory' && <MemoryScreenshot />}
                        </motion.div>
                    </FadeUp>
                )

                return (
                    <div key={row.step} style={{
                        borderTop: '1px solid var(--border)', background: row.bg,
                        paddingTop: 72, paddingBottom: 72,
                        paddingLeft: 'var(--content-pad)', paddingRight: 'var(--content-pad)',
                    }}>
                        <div style={{
                            maxWidth: 'var(--max-width)', margin: '0 auto',
                            display: 'grid',
                            gridTemplateColumns: row.textSide === 'left' ? '45fr 55fr' : '55fr 45fr',
                            gap: 64, alignItems: 'center',
                        }}>
                            {row.textSide === 'left' ? [textCol, screenshotCol] : [screenshotCol, textCol]}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

/* ── Screenshot Variants ── */

function WindowChrome({ channel }: { channel: string }) {
    return (
        <div style={{
            height: 40, background: '#1A1816',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8,
        }}>
            <div style={{ display: 'flex', gap: 6 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(250,249,247,0.7)', marginLeft: 8 }}>
                {channel}
            </span>
        </div>
    )
}

function BriefScreenshot() {
    const briefRows = [
        { dot: '#E1306C', label: 'Content Volume', value: '847 posts/month' },
        { dot: '#69C9D0', label: 'Avg Engagement', value: '4.2%', delta: '+12%' },
        { dot: '#FF0000', label: 'Top Format', value: 'Reels (63% of top posts)' },
        { dot: '#FAF9F7', label: 'Winning Hook', value: '"Before/After transformations"' },
    ]
    return (
        <div style={{ background: '#0D0C0A', borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            <WindowChrome channel="# marketing-intel" />
            <div style={{ padding: 16 }}>
                <div style={{ background: '#1E1C19', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>Nike Competitor Brief</span>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>Generated 10:07 AM</span>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {briefRows.map(r => (
                            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.dot, flexShrink: 0 }} />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#A09D9A', width: 120, flexShrink: 0 }}>{r.label}</span>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>{r.value}</span>
                                {r.delta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'rgba(255,94,44,0.15)', color: 'var(--orange)', padding: '1px 5px', borderRadius: 3 }}>{r.delta}</span>}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                        {['View Full Brief ↗', 'Monitor Nike'].map(label => (
                            <button key={label} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: '#A09D9A', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 4, cursor: 'pointer' }}>{label}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function MonitorScreenshot() {
    return (
        <div style={{ background: '#0D0C0A', borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            <WindowChrome channel="# marketing-intel" />
            <div style={{ padding: 16 }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7', marginBottom: 8 }}>Nike Weekly Digest — Mar 10</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>
                        <span style={{ color: 'var(--orange)' }}>↑ 23%</span> engagement spike on Reels
                    </div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>
                        Launched new campaign: <strong>#JustDoMore</strong>
                    </div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>
                        Added <strong>47K followers</strong> this week
                    </div>
                </div>
                <button style={{ marginTop: 12, fontFamily: 'var(--font-ui)', fontSize: 12, color: '#A09D9A', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 4, cursor: 'pointer' }}>View Full Digest ↗</button>
            </div>
        </div>
    )
}

function MemoryScreenshot() {
    const entries = [
        { date: 'Jan 15', text: 'First competitor report. 12 platforms indexed.' },
        { date: 'Feb 03', text: 'Detected shift to UGC-first strategy. Reels up 40%.' },
        { date: 'Mar 01', text: 'New campaign: #FeelNothing. Community engagement +18%.' },
    ]
    return (
        <div style={{ background: '#0D0C0A', borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            <WindowChrome channel="# marketing-intel" />
            <div style={{ padding: 16 }}>
                <div style={{ background: '#1E1C19', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 14 }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7', marginBottom: 12 }}>Lululemon — since Jan 2025</div>
                    {entries.map(entry => (
                        <div key={entry.date} style={{ display: 'flex', gap: 12, marginBottom: 8, alignItems: 'flex-start' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)', flexShrink: 0, width: 40 }}>{entry.date}</span>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: '#6B6869', lineHeight: 1.5 }}>{entry.text}</span>
                        </div>
                    ))}
                    <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                        {['Full Timeline ↗', 'Compare Brands'].map(label => (
                            <button key={label} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: '#A09D9A', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 4, cursor: 'pointer' }}>{label}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
