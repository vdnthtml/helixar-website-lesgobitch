"use client";

export default function Footer() {
    const columns = [
        {
            header: "PRODUCT",
            links: ["Features", "Pricing", "Changelog", "Add to Slack"],
        },
        { header: "COMPANY", links: ["About", "Careers", "Blog", "Contact"] },
        { header: "LEGAL", links: ["Privacy", "Terms", "Security"] },
    ];

    return (
        <footer
            style={{
                background: "var(--bg-dark)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <div
                style={{
                    maxWidth: "var(--max-width)",
                    margin: "0 auto",
                    padding: "64px var(--content-pad) 48px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        gap: 48,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-ui)",
                                fontSize: 16,
                                fontWeight: 700,
                                color: "var(--text-inverse)",
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                            }}
                        >
                            <span style={{ color: "var(--orange)" }}>■</span>{" "}
                            HELIXAR
                        </div>
                        <p
                            style={{
                                marginTop: 12,
                                fontFamily: "var(--font-ui)",
                                fontSize: 14,
                                color: "var(--text-inverse-body)",
                                lineHeight: 1.6,
                            }}
                        >
                            Built for marketers who refuse to settle.
                        </p>
                    </div>

                    {/* Link columns */}
                    {columns.map((col) => (
                        <div key={col.header}>
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 10,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: "var(--text-muted)",
                                    marginBottom: 16,
                                }}
                            >
                                {col.header}
                            </div>
                            {col.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    style={{
                                        display: "block",
                                        fontFamily: "var(--font-ui)",
                                        fontSize: 14,
                                        color: "var(--text-inverse-body)",
                                        lineHeight: 2.2,
                                    }}
                                    onMouseEnter={(e) =>
                                    (e.currentTarget.style.color =
                                        "var(--text-inverse)")
                                    }
                                    onMouseLeave={(e) =>
                                    (e.currentTarget.style.color =
                                        "var(--text-inverse-body)")
                                    }
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        marginTop: 48,
                        paddingTop: 24,
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 12,
                            color: "var(--text-muted)",
                        }}
                    >
                        © 2025 Helixar. All rights reserved.
                    </span>
                    <div
                        style={{
                            width: 16,
                            height: 16,
                            background: "var(--orange)",
                        }}
                    />
                </div>
            </div>
        </footer>
    );
}
