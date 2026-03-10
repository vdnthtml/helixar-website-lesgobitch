'use client'

import FadeUp from './FadeUp'

export default function FinalCTA() {
    return (
        <section
            id="cta"
            style={{
                background: 'var(--bg-dark)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="bg-word bg-word-dark">HELIXAR</div>

            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: 680, margin: '0 auto',
                padding: '120px var(--content-pad)',
            }}>
                <FadeUp delay={0}>
                    <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(64px,8vw,96px)',
                        lineHeight: 0.9,
                        color: 'var(--text-inverse)',
                    }}>
                        <div>STOP RESEARCHING.</div>
                        <div>START <span className="stamp">KNOWING.</span></div>
                    </div>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <p style={{
                        marginTop: 24, fontFamily: 'var(--font-ui)',
                        fontSize: 16, color: 'var(--text-inverse-body)', lineHeight: 1.65,
                    }}>
                        Add Helixar to your Slack workspace. Type @helixar report [your competitor].
                        See what it finds in under 5 minutes.
                    </p>
                </FadeUp>

                <FadeUp delay={0.16}>
                    <div style={{
                        marginTop: 40, display: 'flex', justifyContent: 'center',
                        gap: 20, alignItems: 'center',
                    }}>
                        <button className="btn-primary">Add to Slack — Free</button>
                        <button className="btn-ghost btn-ghost-dark">Book a 15-min demo →</button>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}
