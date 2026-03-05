const deepDives = [
    {
        label: "Competitor Research",
        title: "Stop spending 10 hours pulling competitor data.",
        desc: "Helixar scrapes every major platform simultaneously \u2014 YouTube, Instagram, TikTok, X, LinkedIn, Facebook \u2014 and saves everything to your workspace automatically. What used to take a week takes minutes.",
        reversed: false,
        mockupItems: [
            { label: "Platforms Monitored", value: "6 active", width: "100%" },
            { label: "Last Scrape", value: "2 minutes ago", width: "85%" },
            { label: "Data Points Collected", value: "12,847", width: "92%" },
        ],
    },
    {
        label: "AI Memory",
        title: "Most AI forgets when you close the tab.",
        desc: "Helixar remembers every client, every campaign, every decision. New team member? They\u2019re up to speed in minutes. Your intelligence compounds over time \u2014 it never starts from zero.",
        reversed: true,
        mockupItems: [
            { label: "Memory Entries", value: "3,241", width: "78%" },
            { label: "Client Profiles", value: "12 active", width: "60%" },
            { label: "Decision Log", value: "847 entries", width: "95%" },
        ],
    },
    {
        label: "Strategy Analysis",
        title: "Not a gut feeling. Not a template.",
        desc: "A scored, ranked action plan built from your actual competitor data \u2014 with estimated ROI per recommendation. Every suggestion is backed by evidence, not assumptions.",
        reversed: false,
        mockupItems: [
            { label: "Recommendations", value: "24 active", width: "70%" },
            { label: "Avg ROI Estimate", value: "+34%", width: "88%" },
            { label: "Confidence Score", value: "91/100", width: "91%" },
        ],
    },
];

export default function DeepDives() {
    return (
        <>
            {deepDives.map((dive, i) => (
                <section className="deep-dive" key={dive.label}>
                    <div className={`deep-dive-inner${dive.reversed ? " reversed" : ""}`}>
                        <div className="deep-dive-copy">
                            <div className="deep-dive-label">{dive.label}</div>
                            <h3 className="deep-dive-title">{dive.title}</h3>
                            <p className="deep-dive-desc">{dive.desc}</p>
                        </div>
                        <div className="deep-dive-screenshot">
                            {dive.mockupItems.map((item) => (
                                <div className="deep-dive-screenshot-item" key={item.label}>
                                    <div className="deep-dive-screenshot-label">{item.label}</div>
                                    <div className="deep-dive-screenshot-value">{item.value}</div>
                                    <div className="deep-dive-screenshot-bar">
                                        <div
                                            className="deep-dive-screenshot-bar-fill"
                                            style={{ width: item.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
