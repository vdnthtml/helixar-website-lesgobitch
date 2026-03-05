const painCards = [
    {
        role: "Solopreneur",
        lines: [
            "You know your product inside out.",
            "Marketing? That\u2019s a different language.",
        ],
        resolve: "Helixar speaks it for you.",
    },
    {
        role: "Agency Founder",
        lines: [
            "Every new client means more hires.",
            "More hires means more risk.",
        ],
        resolve: "Helixar is the team that scales without the headcount.",
    },
    {
        role: "Team Lead",
        lines: [
            "You spend more time briefing and reviewing",
            "than actually thinking.",
        ],
        resolve: "Helixar collapses the loop. You stay in control.",
    },
];

export default function PainPoints() {
    return (
        <section className="section">
            <div className="section-label">The Problem</div>
            <h2 className="section-headline">Who made marketing so hard?</h2>

            <div className="pain-grid">
                {painCards.map((card) => (
                    <div className="pain-card" key={card.role}>
                        <div className="pain-card-role">{card.role}</div>
                        <div className="pain-card-body">
                            {card.lines.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < card.lines.length - 1 && <br />}
                                </span>
                            ))}
                            <strong>{card.resolve}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
