export default function SocialProof() {
    const items = [
        "DTC Founders",
        "Growth Agencies",
        "SaaS Marketing Teams",
        "E-commerce Brands",
        "Content Studios",
        "Performance Marketers",
        "Brand Strategists",
        "Social Media Managers",
        "Startup Founders",
        "Freelance Consultants",
    ];

    const doubled = [...items, ...items];

    return (
        <section className="social-proof">
            <div className="social-proof-label">
                Used by marketers, founders, and agencies at
            </div>
            <div className="marquee-container">
                <div className="marquee-track">
                    {doubled.map((item, i) => (
                        <span className="marquee-item" key={i}>
                            {item}
                            <span className="marquee-separator">›</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
