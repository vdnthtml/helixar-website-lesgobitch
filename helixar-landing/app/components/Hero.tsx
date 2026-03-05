import ProductMockup from "./ProductMockup";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div className="hero-content">
                <span className="hero-eyebrow">AI Marketing Workspace</span>
                <h1 className="hero-headline">
                    Marketing used to need a team. Now it needs you.
                </h1>
                <p className="hero-subhead">
                    Helixar researches competitors, plans campaigns, generates content,
                    and tracks performance — all in one workspace that gets smarter
                    every time you use it.
                </p>
                <div className="hero-ctas">
                    <a href="#download" className="btn-primary btn-primary-xl">
                        Download for Mac
                    </a>
                    <a href="#how" className="btn-tertiary" style={{ fontSize: "var(--text-md)" }}>
                        See how it works →
                    </a>
                </div>
            </div>
            <div className="hero-product">
                <div className="hero-stage" />
                <ProductMockup />
            </div>
            <div className="hero-dissolve" />
        </section>
    );
}
