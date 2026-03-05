export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div>
                    <div className="footer-logo">
                        <span className="nav-logo-mark">H</span>
                        Helixar
                    </div>
                    <div className="footer-tagline">
                        The AI workspace for marketers who want to operate like a team — without building one.
                    </div>
                </div>

                <div>
                    <div className="footer-column-title">Product</div>
                    <a href="#features" className="footer-link">Features</a>
                    <a href="#" className="footer-link">Pricing</a>
                    <a href="#" className="footer-link">Changelog</a>
                    <a href="#download" className="footer-link">Download</a>
                </div>

                <div>
                    <div className="footer-column-title">Resources</div>
                    <a href="#" className="footer-link">Documentation</a>
                    <a href="#" className="footer-link">Blog</a>
                    <a href="#" className="footer-link">Community</a>
                    <a href="#" className="footer-link">Support</a>
                </div>

                <div>
                    <div className="footer-column-title">Company</div>
                    <a href="#" className="footer-link">About</a>
                    <a href="#" className="footer-link">Careers</a>
                    <a href="#" className="footer-link">Privacy</a>
                    <a href="#" className="footer-link">Terms</a>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="footer-copyright">
                    &copy; 2025 Helixar. All rights reserved.
                </span>
                <span className="footer-copyright">
                    Built for marketers who refuse to settle.
                </span>
            </div>
        </footer>
    );
}
