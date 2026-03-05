import { ChevronRight } from "lucide-react";

const steps = [
    {
        name: "Research",
        desc: "Pull competitor data from YouTube, Instagram, TikTok, X, LinkedIn, and Facebook \u2014 simultaneously. What used to take a week takes minutes.",
    },
    {
        name: "Analyze",
        desc: "Get scored, ranked recommendations backed by real platform data \u2014 not gut instinct or generic templates.",
    },
    {
        name: "Generate",
        desc: "Content variants with reasoning. A/B tests with hypotheses. Each piece informed by what\u2019s worked before.",
    },
    {
        name: "Track",
        desc: "Monitor performance, flag issues before they become problems, and get AI recommendations on what to change.",
    },
];

export default function TheLoop() {
    return (
        <section className="loop-section" id="how">
            <div className="section">
                <div className="section-label">The System</div>
                <h2 className="section-headline">One loop. Every campaign.</h2>
                <p className="section-subhead">
                    Research. Analyze. Generate. Track. And every cycle makes the next one smarter.
                </p>
            </div>

            <div className="loop-grid">
                {steps.map((step, i) => (
                    <div className="loop-step" key={step.name}>
                        <span className="loop-step-number">0{i + 1}</span>
                        <div className="loop-step-name">{step.name}</div>
                        <div className="loop-step-desc">{step.desc}</div>
                        {i < steps.length - 1 && (
                            <span className="loop-arrow">
                                <ChevronRight size={20} />
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
