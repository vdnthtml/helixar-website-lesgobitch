"use client";

import { useEffect, useState } from "react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`landing-nav${scrolled ? " scrolled" : ""}`}>
            <div className="nav-inner">
                <a href="#" className="nav-logo">
                    <span className="nav-logo-mark">H</span>
                    Helixar
                </a>
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#changelog" className="nav-link">Changelog</a>
                </div>
                <a href="#download" className="btn-primary nav-cta">
                    Download for Mac
                </a>
            </div>
        </nav>
    );
}
