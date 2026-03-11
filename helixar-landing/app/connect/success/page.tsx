export default function ConnectSuccess() {
  return (
    <div style={{
      background: 'var(--bg-base)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="bg-word">LIVE</div>

      <div style={{ position:'relative', zIndex:1, maxWidth:480,
        textAlign:'center', padding:'0 24px' }}>

        {/* Check circle */}
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'rgba(255,94,44,0.1)',
          border: '2px solid var(--orange)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 40px',
          fontFamily: 'var(--font-ui)', fontSize: 22,
          color: 'var(--orange)', fontWeight: 700,
        }}>✓</div>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px,6vw,72px)',
          lineHeight: 0.92,
          color: 'var(--text-primary)',
          marginBottom: 20,
        }}>
          <div>HELIXAR IS</div>
          <div><span className="stamp">LIVE.</span></div>
        </div>

        <p style={{ fontFamily:'var(--font-ui)', fontSize:16,
          color:'var(--text-body)', lineHeight:1.65, marginBottom:40 }}>
          Your workspace is connected. Go to Slack and type{' '}
          <span style={{ fontFamily:'var(--font-mono)', fontSize:13,
            background:'var(--bg-dark)', color:'var(--text-inverse)',
            padding:'2px 8px', borderRadius:4 }}>
            @helixar report Nike
          </span>
          {' '}to run your first brief.
        </p>

        <a href="slack://open" style={{ textDecoration:'none' }}>
          <button className="btn-primary"
            style={{ fontSize:15, height:48, margin:'0 auto' }}>
            Open Slack →
          </button>
        </a>

        <p style={{ marginTop:16, fontFamily:'var(--font-ui)', fontSize:13,
          color:'var(--text-muted)' }}>
          Didn&apos;t work?{' '}
          <a href="https://slack.com" target="_blank" rel="noreferrer"
            style={{ color:'var(--orange)' }}>
            Open Slack in browser
          </a>
        </p>

      </div>
    </div>
  )
}
