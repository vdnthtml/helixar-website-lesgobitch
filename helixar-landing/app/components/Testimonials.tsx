'use client'

import FadeUp from './FadeUp'

export default function Testimonials() {
    const quotes = [
        {
            quote: 'I used to spend Monday mornings building competitor reports. Now I type one command and have a full brief before my first call. That time went straight into client strategy.',
            name: 'Sarah Chen',
            role: 'Head of Marketing, Arch Software',
        },
        {
            quote: "Client asked what their top competitor was doing on TikTok. I had the data. They didn\u2019t. We got the contract.",
            name: 'Marcus Webb',
            role: 'Freelance Brand Strategist',
        },
        {
            quote: 'After 90 days, Helixar knew our vertical better than most junior marketers. The recommendations went from decent to genuinely surprising.',
            name: 'Priya Nair',
            role: 'Growth Lead, Voltara Labs',
        },
    ]

    return (
        <section style={{ background: 'var(--bg-alt)' }}>
            <div style={{
                maxWidth: 'var(--max-width)', margin: '0 auto',
                paddingTop: 96, paddingBottom: 96,
                paddingLeft: 'var(--content-pad)', paddingRight: 'var(--content-pad)',
            }}>
                <FadeUp delay={0}>
                    <div className="ticket-label">RESULTS</div>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <h2 style={{
                        marginTop: 16, fontFamily: 'var(--font-ui)', fontSize: 40,
                        fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em',
                    }}>
                        From people who made the switch.
                    </h2>
                </FadeUp>

                <div style={{
                    marginTop: 64, display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr', gap: 40,
                }}>
                    {quotes.map((q, index) => (
                        <FadeUp key={q.name} delay={index * 0.1}>
                            <div style={{ borderLeft: '2px solid var(--orange)', paddingLeft: 20 }}>
                                <p style={{
                                    fontFamily: 'var(--font-ui)', fontSize: 16,
                                    fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.7,
                                }}>&ldquo;{q.quote}&rdquo;</p>
                                <div style={{ marginTop: 16 }}>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{q.name}</div>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{q.role}</div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
