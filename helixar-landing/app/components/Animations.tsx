"use client";

import { useEffect } from "react";

export default function Animations() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        let gsapModule: typeof import("gsap") | null = null;
        let ScrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null;

        const initAnimations = async () => {
            const gsapImport = await import("gsap");
            const stImport = await import("gsap/ScrollTrigger");

            gsapModule = gsapImport;
            ScrollTriggerModule = stImport;

            const gsap = gsapImport.gsap;
            const ScrollTrigger = stImport.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            // ─── HERO ENTRANCE TIMELINE ───
            const headline = document.querySelector(".hero-headline");
            if (headline) {
                const text = headline.textContent || "";
                headline.innerHTML = text
                    .split(" ")
                    .map(
                        (w) =>
                            `<span class="word" style="display:inline-block">${w}</span>`
                    )
                    .join(" ");
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-bg", { opacity: 0, duration: 1.2 })
                .from(
                    ".hero-eyebrow",
                    { opacity: 0, y: 16, duration: 0.6 },
                    "-=0.6"
                )
                .from(
                    ".hero-headline .word",
                    { opacity: 0, y: 20, stagger: 0.07, duration: 0.5 },
                    "-=0.2"
                )
                .from(
                    ".hero-subhead",
                    { opacity: 0, y: 12, duration: 0.5 },
                    "-=0.2"
                )
                .from(
                    ".hero-ctas",
                    { opacity: 0, y: 12, duration: 0.4 },
                    "-=0.1"
                )
                .from(
                    ".hero-product",
                    {
                        opacity: 0,
                        scale: 0.96,
                        y: 24,
                        duration: 0.8,
                        ease: "power2.out",
                    },
                    "-=0.3"
                );

            // ─── CURSOR SPOTLIGHT ON CARDS ───
            const spotlightCards = document.querySelectorAll(
                '.testimonial-card, .pain-card, .compound-card'
            );

            spotlightCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const el = card as HTMLElement;
                    const rect = el.getBoundingClientRect();
                    const x = (e as MouseEvent).clientX - rect.left;
                    const y = (e as MouseEvent).clientY - rect.top;
                    el.style.setProperty('--mouse-x', `${x}px`);
                    el.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // ─── LOOP SECTION — Now CSS-only, no GSAP ───

            // ─── PAIN CARDS — Scroll-Triggered ───
            gsap.from(".pain-card", {
                scrollTrigger: {
                    trigger: ".pain-grid",
                    start: "top 72%",
                },
                opacity: 0,
                y: 20,
                stagger: 0.08,
                duration: 0.65,
                ease: "power3.out",
            });

            // ─── FEATURE ROWS — Alternating Reveal ───
            const featureRows =
                gsap.utils.toArray<HTMLElement>(".feature-row");
            featureRows.forEach((row) => {
                const copy = row.querySelector(".feature-row-copy");
                const panel = row.querySelector(".feature-panel");

                if (copy) {
                    gsap.from(copy, {
                        scrollTrigger: { trigger: row, start: "top 70%" },
                        opacity: 0,
                        x: -24,
                        duration: 0.7,
                        ease: "power3.out",
                    });
                }
                if (panel) {
                    gsap.from(panel, {
                        scrollTrigger: { trigger: row, start: "top 70%" },
                        opacity: 0,
                        x: 24,
                        duration: 0.7,
                        delay: 0.1,
                        ease: "power3.out",
                    });
                }
            });

            // ─── FEATURES HEADLINE — Scroll Reveal ───
            const featuresHeadline = document.querySelector(".features-headline");
            if (featuresHeadline) {
                gsap.from(featuresHeadline, {
                    scrollTrigger: { trigger: featuresHeadline, start: "top 80%" },
                    opacity: 0,
                    y: 20,
                    duration: 0.65,
                    ease: "power3.out",
                });
            }

            // ─── TESTIMONIALS — Stagger ───
            gsap.from(".testimonial-card", {
                scrollTrigger: {
                    trigger: ".testimonials-grid",
                    start: "top 72%",
                },
                opacity: 0,
                y: 20,
                stagger: 0.08,
                duration: 0.65,
                ease: "power3.out",
            });

            // ─── COMPOUND ADVANTAGE — Cards + Number Counter ───
            gsap.from(".compound-card", {
                scrollTrigger: {
                    trigger: ".compound-visual",
                    start: "top 72%",
                },
                opacity: 0,
                y: 20,
                stagger: 0.08,
                duration: 0.65,
                ease: "power3.out",
            });

            // ─── FINAL CTA — Entrance ───
            gsap.from(".final-cta-content", {
                scrollTrigger: { trigger: ".final-cta", start: "top 70%" },
                opacity: 0,
                y: 32,
                duration: 0.8,
                ease: "power3.out",
            });

            // ─── SECTION HEADLINES — Scroll Reveal ───
            const sectionLabels =
                gsap.utils.toArray<HTMLElement>(".section-label");
            sectionLabels.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: "top 80%" },
                    opacity: 0,
                    y: 20,
                    duration: 0.65,
                    ease: "power3.out",
                });
            });

            const sectionHeadlines =
                gsap.utils.toArray<HTMLElement>(".section-headline");
            sectionHeadlines.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: "top 80%" },
                    opacity: 0,
                    y: 20,
                    duration: 0.65,
                    delay: 0.08,
                    ease: "power3.out",
                });
            });
        };

        initAnimations();

        return () => {
            if (ScrollTriggerModule) {
                ScrollTriggerModule.ScrollTrigger.getAll().forEach((t) => t.kill());
            }
        };
    }, []);

    return null;
}
