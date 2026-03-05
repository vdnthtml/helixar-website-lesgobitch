const primaryFeatures = [
    {
        label: "Competitor Research",
        headline: "Stop spending 10 hours pulling competitor data.",
        body: "Helixar scrapes every major platform simultaneously — YouTube, Instagram, TikTok, X, LinkedIn, Facebook — and saves everything to your workspace automatically. What used to take a week takes minutes.",
        pills: ["6 Platforms", "Real-time", "Auto-saved"],
        reversed: false,
        panelItems: [
            { label: "Platforms Monitored", value: "6 active", width: "100%" },
            { label: "Last Scrape", value: "2 minutes ago", width: "85%" },
            { label: "Data Points Collected", value: "12,847", width: "92%" },
        ],
    },
    {
        label: "AI Memory",
        headline: "Most AI forgets when you close the tab.",
        body: "Helixar remembers every client, every campaign, every decision. New team member? They\u2019re up to speed in minutes. Your intelligence compounds over time \u2014 it never starts from zero.",
        pills: ["Persistent", "Cross-client", "Searchable"],
        reversed: true,
        panelItems: [
            { label: "Memory Entries", value: "3,241", width: "78%" },
            { label: "Client Profiles", value: "12 active", width: "60%" },
            { label: "Decision Log", value: "847 entries", width: "95%" },
        ],
    },
    {
        label: "Strategy Analysis",
        headline: "Not a gut feeling. Not a template.",
        body: "A scored, ranked action plan built from your actual competitor data \u2014 with estimated ROI per recommendation. Every suggestion is backed by evidence, not assumptions.",
        pills: ["Data-driven", "ROI scored", "Actionable"],
        reversed: false,
        panelItems: [
            { label: "Recommendations", value: "24 active", width: "70%" },
            { label: "Avg ROI Estimate", value: "+34%", width: "88%" },
            { label: "Confidence Score", value: "91/100", width: "91%" },
        ],
    },
];

const secondaryFeatures = [
    {
        name: "Campaign Management",
        desc: "Draft to live, tracked in one place. Nothing deploys without your approval. Everything has an audit trail.",
    },
    {
        name: "A/B Testing",
        desc: "Tests with hypotheses. Not random experiments. Every result gets stored. Every future test gets smarter.",
    },
    {
        name: "Content Generation",
        desc: "Not 10 generic captions. 10 strategically different variants \u2014 each with a reason it might outperform the others.",
    },
];

export default function FeaturesGrid() {
    return (
        <section className="features-section" id="features">
            <div className="features-inner">
                <div className="section-label features-label">Capabilities</div>
                <h2 className="features-headline">Everything runs. You direct.</h2>

                {primaryFeatures.map((f) => (
                    <div className={`feature-row${f.reversed ? " feature-row-reversed" : ""}`} key={f.label}>
                        <div className="feature-row-copy">
                            <div className="feature-row-label">{f.label}</div>
                            <h3 className="feature-row-title">{f.headline}</h3>
                            <p className="feature-row-body">{f.body}</p>
                            <div className="feature-row-pills">
                                {f.pills.map((pill) => (
                                    <span className="feature-pill" key={pill}>{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="feature-panel">
                            {f.panelItems.map((item) => (
                                <div className="feature-panel-item" key={item.label}>
                                    <div className="feature-panel-label">{item.label}</div>
                                    <div className="feature-panel-value">{item.value}</div>
                                    <div className="feature-panel-bar">
                                        <div
                                            className="feature-panel-bar-fill"
                                            style={{ width: item.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="secondary-features">
                    {secondaryFeatures.map((f) => (
                        <div className="secondary-feature" key={f.name}>
                            <div className="secondary-feature-name">{f.name}</div>
                            <div className="secondary-feature-desc">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
