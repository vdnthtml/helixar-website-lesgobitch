const testimonials = [
    {
        quote:
            "We cut our competitor research time from 15 hours a week to about 20 minutes. The data is more comprehensive than what we were pulling manually.",
        name: "Sarah Chen",
        role: "Head of Growth, Meridian Commerce",
        initials: "SC",
    },
    {
        quote:
            "I replaced two part-time analysts with Helixar. Not because I wanted to \u2014 because the output was better. The memory feature alone changed how we onboard new clients.",
        name: "Marcus Rivera",
        role: "Founder, Tidal Agency",
        initials: "MR",
    },
    {
        quote:
            "After 90 days, Helixar knew our vertical better than most junior marketers. The strategy recommendations went from decent to genuinely surprising.",
        name: "Priya Natarajan",
        role: "Marketing Director, Voltera Labs",
        initials: "PN",
    },
];

export default function Testimonials() {
    return (
        <section className="section">
            <div className="section-label">Results</div>
            <h2 className="section-headline">From people who made the switch.</h2>

            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div className="testimonial-card" key={t.name}>
                        <p className="testimonial-quote">{t.quote}</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">{t.initials}</div>
                            <div>
                                <div className="testimonial-name">{t.name}</div>
                                <div className="testimonial-role">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
