"use client";

import { useEffect, useState } from "react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                height: "var(--nav-height)",
                width: "100%",
                background: scrolled ? "rgba(245,242,238,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
                transition: "background 200ms ease, border-color 200ms ease",
            }}
        >
            {/* ── INNER WRAPPER ── */}
            <div
                style={{
                    maxWidth: "var(--max-width)",
                    margin: "0 auto",
                    padding: "0 20px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                {/* Logo — always visible */}
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 4,
                    fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 700,
                    color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <span style={{ color: 'var(--orange)' }}>■</span> HELIXAR
                </a>

                {/* Desktop links — hide on mobile */}
                <nav style={{ display: 'flex', gap: 32 }}
                    className="mobile-hide">
                    {['How it works', 'Pricing', 'Changelog'].map(link => (
                        <a key={link}
                            href={link === 'How it works' ? '#how-it-works' : `#${link.toLowerCase()}`}
                            style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500,
                                color: 'var(--text-body)', transition: 'color 120ms ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA — hide on mobile */}
                <a href="/signup" className="mobile-hide" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ height: 40, padding: '0 20px', fontSize: 14 }}>
                        Add to Slack
                    </button>
                </a>

                {/* Mobile: CTA + hamburger */}
                <div style={{ display: 'none', gap: 12, alignItems: 'center' }}
                    className="mobile-flex">
                    <a href="/signup" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary"
                            style={{ height: 36, padding: '0 14px', fontSize: 13 }}>
                            Add to Slack
                        </button>
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer',
                            padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <span style={{ display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)',
                            transition: 'all 200ms ease',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <span style={{ display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)',
                            opacity: menuOpen ? 0 : 1,
                            transition: 'all 200ms ease' }} />
                        <span style={{ display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)',
                            transition: 'all 200ms ease',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: 64,
                    left: 0,
                    right: 0,
                    background: 'rgba(245,242,238,0.97)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid var(--border)',
                    padding: '16px 20px 24px',
                    zIndex: 99,
                }}>
                    {['How it works', 'Pricing', 'Changelog'].map(link => (
                        <a key={link}
                            href={link === 'How it works' ? '#how-it-works' : `#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: 16,
                                fontWeight: 500, color: 'var(--text-primary)',
                                padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
