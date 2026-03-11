'use client'

import { motion } from 'framer-motion'
import InteractiveSlackCard from './InteractiveSlackCard'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const lines = ['TYPE A', 'COMMAND.', 'GET A']
const stampLine = 'COMPETITOR BRIEF.'

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                background: 'var(--bg-base)',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="bg-word">HELIXAR</div>

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    paddingTop: 80,
                    paddingBottom: 80,
                    paddingLeft: 'var(--content-pad)',
                    paddingRight: 'var(--content-pad)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 64,
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {/* LEFT COLUMN */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease, delay: 0 }}
                    >
                        <div className="ticket-label" style={{ marginBottom: 16 }}>
                            SLACK-NATIVE AI FOR MARKETING TEAMS
                        </div>
                    </motion.div>

                    <div
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(64px,8vw,96px)',
                            lineHeight: 0.92,
                            letterSpacing: '0.01em',
                            color: 'var(--text-primary)',
                        }}
                    >
                        {lines.map((line, i) => (
                            <motion.div
                                key={line}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease, delay: 0.34 }}
                        >
                            <span className="stamp">COMPETITOR BRIEF.</span>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease, delay: 0.44 }}
                        style={{
                            marginTop: 20,
                            fontFamily: 'var(--font-ui)',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'var(--text-body)',
                            maxWidth: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        Type a command in Slack. Get a full competitor brief in under 5
                        minutes. No tabs. No tools.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease, delay: 0.52 }}
                        style={{
                            marginTop: 28,
                            display: 'flex',
                            gap: 14,
                            alignItems: 'center',
                        }}
                    >
                        <a href="/signup" style={{ textDecoration: 'none' }}>
                            <button className="btn-primary">Add to Slack — Free</button>
                        </a>
                        <a href="#how-it-works" style={{ textDecoration: 'none' }}>
                            <button className="btn-ghost">Watch it work →</button>
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease, delay: 0.58 }}
                        style={{
                            marginTop: 10,
                            fontFamily: 'var(--font-ui)',
                            fontSize: 12,
                            color: 'var(--text-muted)',
                        }}
                    >
                        Setup takes 2 minutes. No credit card required.
                    </motion.p>
                </div>

                {/* RIGHT COLUMN — Interactive Slack card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.2 }}
                    style={{ marginTop: 40 }}
                >
                    <InteractiveSlackCard />
                </motion.div>
            </div>
        </section>
    )
}
