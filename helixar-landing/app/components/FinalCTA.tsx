import { Apple, Monitor } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="final-cta" id="download">
            <div className="final-cta-content">
                <h2 className="final-cta-headline">
                    Your whole marketing operation.<br />
                    Starts today.
                </h2>
                <p className="final-cta-subhead">
                    Available for Mac and Windows.
                </p>
                <div className="final-cta-buttons">
                    <a href="#" className="btn-primary btn-primary-xl">
                        <Apple size={18} />
                        Download for Mac
                    </a>
                    <a href="#" className="btn-secondary btn-secondary-xl">
                        <Monitor size={18} />
                        Download for Windows
                    </a>
                </div>
                <p className="final-cta-note">
                    Free to start. No credit card required.
                </p>
            </div>
        </section>
    );
}
