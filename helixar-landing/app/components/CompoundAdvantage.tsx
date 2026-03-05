export default function CompoundAdvantage() {
    return (
        <section className="compound-section">
            <div className="compound-inner">
                <div className="section-label">The Moat</div>
                <h2 className="section-headline">It gets smarter every time.</h2>

                <div className="compound-body">
                    Every research session adds to Helixar&apos;s memory.
                    Every campaign teaches it what works for your clients.
                    Every A/B test becomes context for the next one.
                    <br /><br />
                    After 30 days, Helixar knows your market better than most analysts.
                    After 90 days, it&apos;s irreplaceable.
                    <br /><br />
                    That&apos;s the compound advantage.
                </div>

                <div className="compound-visual">
                    <div className="compound-card">
                        <div className="compound-card-number count-number" data-target="30">30</div>
                        <div className="compound-card-label">Days</div>
                        <div className="compound-card-desc">Knows your market better than most analysts</div>
                    </div>
                    <div className="compound-card">
                        <div className="compound-card-number count-number" data-target="90">90</div>
                        <div className="compound-card-label">Days</div>
                        <div className="compound-card-desc">Becomes irreplaceable to your workflow</div>
                    </div>
                    <div className="compound-card">
                        <div className="compound-card-number">∞</div>
                        <div className="compound-card-label">Loop</div>
                        <div className="compound-card-desc">Every cycle makes the next one smarter</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
