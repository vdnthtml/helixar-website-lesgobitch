'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'

const plans = [
    {
        name: 'Starter', desc: 'For freelancers and small teams.', yearly: '20', monthly: '29',
        body: '1 Slack workspace, 3 reports per month, 2 monitored brands, and basic memory.',
        cta: 'Start Free — 14 days', ctaClass: 'btn-secondary', featured: false
    },
    {
        name: 'Pro', desc: 'For agencies and growing teams.', yearly: '49', monthly: '69',
        body: '3 workspaces, unlimited reports, 10 monitored brands, full AI memory, and priority support.',
        cta: 'Start Free — 14 days', ctaClass: 'btn-primary', featured: true
    },
    {
        name: 'Enterprise', desc: 'Forward-deployed setup for large teams.', yearly: null, monthly: null,
        body: 'Unlimited workspaces, forward-deployed setup, custom model training, dedicated Slack channel, SOC 2 compliant, and SLA guarantees.',
        cta: 'Talk to us', ctaClass: 'btn-secondary', featured: false
    },
]

export default function Pricing() {
    const [yearly, setYearly] = useState(true)

    const trustBadges = ['● NO CREDIT CARD', '● CANCEL ANYTIME', '● GDPR COMPLIANT', '● SOC 2 READY', '● SLACK CERTIFIED']

    return (
        <section id="pricing" style={{ background: 'var(--bg-base)' }}>
            <div style={{
                maxWidth: 'var(--max-width)', margin: '0 auto',
                paddingTop: 96, paddingBottom: 96,
                paddingLeft: 'var(--content-pad)', paddingRight: 'var(--content-pad)',
            }}>
                <FadeUp delay={0}>
                    <div className="ticket-label">PRICING</div>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div style={{
                        marginTop: 16, fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(56px,6vw,80px)', lineHeight: 0.9,
                        color: 'var(--text-primary)',
                    }}>
                        SIMPLE. <span className="stamp">TWO OPTIONS.</span>
                    </div>
                </FadeUp>

                <FadeUp delay={0.16}>
                    <div style={{
                        marginTop: 28, display: 'inline-flex',
                        border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden',
                    }}>
                        {[{ label: 'Monthly', val: false }, { label: yearly ? 'Yearly  SAVE 31%' : 'Yearly', val: true }].map(opt => (
                            <button key={String(opt.val)} onClick={() => setYearly(opt.val)} style={{
                                padding: '8px 20px', fontSize: 14, fontWeight: 500, border: 'none',
                                background: yearly === opt.val ? 'var(--orange)' : 'transparent',
                                color: yearly === opt.val ? '#fff' : 'var(--text-body)',
                                transition: 'all 150ms ease', cursor: 'pointer',
                            }}>{opt.label}</button>
                        ))}
                    </div>
                </FadeUp>

                <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
                    {plans.map((plan, index) => (
                        <FadeUp key={plan.name} delay={index * 0.08}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                ...(plan.featured ? { borderTop: '3px solid var(--orange)', boxShadow: 'var(--shadow-md)' } : {}),
                                borderRadius: 8, padding: 40,
                                display: 'flex', flexDirection: 'column', height: '100%',
                            }}>
                                {plan.featured && <div className="ticket-label" style={{ alignSelf: 'flex-start', marginBottom: 20 }}>MOST POPULAR</div>}

                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>{plan.name}</div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>{plan.desc}</div>

                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 24, minHeight: 58 }}>
                                    {plan.yearly !== null ? (
                                        <>
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={yearly ? 'yearly' : 'monthly'}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                    style={{ fontFamily: 'var(--font-mono)', fontSize: 48, fontWeight: 700, color: 'var(--text-primary)' }}
                                                >
                                                    ${yearly ? plan.yearly : plan.monthly}
                                                </motion.span>
                                            </AnimatePresence>
                                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 16, color: 'var(--text-muted)' }}>/mo</span>
                                        </>
                                    ) : (
                                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 40, fontWeight: 700, color: 'var(--text-primary)' }}>Custom</span>
                                    )}
                                </div>

                                {plan.yearly !== null && (
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                                        {yearly ? 'billed annually' : 'billed monthly'}
                                    </div>
                                )}

                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.65, marginTop: 24 }}>
                                    {plan.body}
                                </p>

                                <div style={{ marginTop: 'auto', paddingTop: 32 }}>
                                    <a href={plan.name === 'Enterprise' ? 'mailto:hello@helixar.com' : '/signup'} style={{ textDecoration: 'none' }}>
                                        <button className={plan.ctaClass} style={{ width: '100%', justifyContent: 'center' }}>{plan.cta}</button>
                                    </a>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.3}>
                    <div style={{ marginTop: 40, textAlign: 'center' }}>
                        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-muted)' }}>
                            No contracts. Cancel anytime. 14-day free trial on all plans.
                        </p>
                        <div style={{ marginTop: 16, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {trustBadges.map(t => (
                                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}
