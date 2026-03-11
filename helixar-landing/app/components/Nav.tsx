"use client";

import { useEffect, useState } from "react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

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
            <div
                style={{
                    maxWidth: "var(--max-width)",
                    margin: "0 auto",
                    padding: "0 var(--content-pad)",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a href="/">
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontFamily: "var(--font-ui)",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "var(--text-primary)",
                        }}
                    >
                        <span style={{ color: "var(--orange)" }}>■</span> HELIXAR
                    </span>
                </a>

                {/* Links */}
                <nav style={{ display: "flex", gap: 32 }}>
                    {["How it works", "Pricing", "Changelog"].map((link) => (
                        <a
                            key={link}
                            href={
                                link === "How it works"
                                    ? "#how-it-works"
                                    : `#${link.toLowerCase()}`
                            }
                            style={{
                                fontFamily: "var(--font-ui)",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--text-body)",
                                transition: "color 120ms ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--text-primary)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-body)")
                            }
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a href="/signup" style={{ textDecoration: 'none' }}>
                    <button
                        className="btn-primary"
                        style={{ height: 40, padding: "0 20px", fontSize: 14 }}
                    >
                        Add to Slack
                    </button>
                </a>
            </div>
        </nav>
    );
}
