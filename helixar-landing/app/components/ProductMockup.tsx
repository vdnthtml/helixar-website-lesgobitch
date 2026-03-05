import {
    Search,
    BarChart3,
    Megaphone,
    Activity,
    FlaskConical,
    Brain,
    Settings,
    Link,
    HelpCircle,
} from "lucide-react";

export default function ProductMockup() {
    return (
        <div className="mockup-container">
            {/* Sidebar */}
            <div className="mockup-sidebar">
                <div className="mockup-sidebar-logo">
                    <span className="mockup-sidebar-logo-icon">H</span>
                    Helixar
                </div>

                <div className="mockup-sidebar-section-label">Main</div>

                <div className="mockup-nav-item">
                    <Search size={16} className="mockup-nav-icon" />
                    <span>Workspace</span>
                </div>
                <div className="mockup-nav-item active">
                    <Search size={16} className="mockup-nav-icon" />
                    <span>Research</span>
                </div>
                <div className="mockup-nav-item">
                    <Megaphone size={16} className="mockup-nav-icon" />
                    <span>Campaigns</span>
                </div>
                <div className="mockup-nav-item">
                    <Activity size={16} className="mockup-nav-icon" />
                    <span>Performance</span>
                </div>
                <div className="mockup-nav-item">
                    <FlaskConical size={16} className="mockup-nav-icon" />
                    <span>Experiments</span>
                </div>
                <div className="mockup-nav-item">
                    <Brain size={16} className="mockup-nav-icon" />
                    <span>Memory</span>
                </div>

                <div className="mockup-sidebar-section-label">System</div>
                <div className="mockup-nav-item">
                    <Link size={16} className="mockup-nav-icon" />
                    <span>Integrations</span>
                </div>
                <div className="mockup-nav-item">
                    <Settings size={16} className="mockup-nav-icon" />
                    <span>Settings</span>
                </div>
            </div>

            {/* Main content */}
            <div className="mockup-main">
                <div className="mockup-page-title">Nike Competitor Analysis</div>

                <div className="mockup-badges">
                    <span className="mockup-badge mockup-badge-yt">YT</span>
                    <span className="mockup-badge mockup-badge-ig">IG</span>
                    <span className="mockup-badge mockup-badge-tk">TK</span>
                    <span className="mockup-badge mockup-badge-x">X</span>
                    <span className="mockup-badge mockup-badge-fb">FB</span>
                    <span className="mockup-badge mockup-badge-li">LI</span>
                </div>

                <div className="mockup-metrics">
                    <div className="mockup-metric-card">
                        <div className="mockup-metric-label">Total Posts</div>
                        <div className="mockup-metric-value">2,847</div>
                        <div className="mockup-metric-delta positive">↑ 12.4%</div>
                    </div>
                    <div className="mockup-metric-card">
                        <div className="mockup-metric-label">Avg Engagement</div>
                        <div className="mockup-metric-value">4.2%</div>
                        <div className="mockup-metric-delta positive">↑ 0.8%</div>
                    </div>
                    <div className="mockup-metric-card">
                        <div className="mockup-metric-label">Channel Score</div>
                        <div className="mockup-metric-value">87</div>
                        <div className="mockup-metric-delta negative">↓ 2pts</div>
                    </div>
                </div>

                <table className="mockup-table">
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>Followers</th>
                            <th>Posts / mo</th>
                            <th>Eng. Rate</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Instagram</td>
                            <td>306M</td>
                            <td>48</td>
                            <td>3.8%</td>
                            <td className="score-high">92</td>
                        </tr>
                        <tr>
                            <td>TikTok</td>
                            <td>6.2M</td>
                            <td>34</td>
                            <td>5.1%</td>
                            <td className="score-high">88</td>
                        </tr>
                        <tr>
                            <td>YouTube</td>
                            <td>2.1M</td>
                            <td>12</td>
                            <td>2.9%</td>
                            <td className="score-high">76</td>
                        </tr>
                        <tr>
                            <td>X (Twitter)</td>
                            <td>10.4M</td>
                            <td>92</td>
                            <td>1.4%</td>
                            <td className="score-mid">54</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
