'use client'

export default function ConnectPage() {
  const slackAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.NEXT_PUBLIC_SLACK_CLIENT_ID}&scope=commands,chat:write,app_mentions:read&redirect_uri=${process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI}`

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
      <div className="bg-word">CONNECT</div>

      <div style={{ position:'relative', zIndex:1, maxWidth:480,
        textAlign:'center', padding:'0 24px', width:'100%' }}>

        {/* Logo */}
        <a href="/" style={{ display:'inline-flex', alignItems:'center', gap:4,
          fontFamily:'var(--font-ui)', fontSize:16, fontWeight:700,
          color:'var(--text-primary)', textDecoration:'none', marginBottom:40 }}>
          <span style={{ color:'var(--orange)' }}>■</span> HELIXAR
        </a>

        {/* Ticket label */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:20 }}>
          <div className="ticket-label">LAST STEP</div>
        </div>

        {/* Headline */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px,6vw,72px)',
          lineHeight: 0.92,
          color: 'var(--text-primary)',
          letterSpacing: '0.01em',
          marginBottom: 20,
        }}>
          <div>ADD TO YOUR</div>
          <div><span className="stamp">SLACK.</span></div>
        </div>

        <p style={{ fontFamily:'var(--font-ui)', fontSize:16, color:'var(--text-body)',
          lineHeight:1.65, marginBottom:40 }}>
          Connect Helixar to your Slack workspace. Once installed, type{' '}
          <span style={{ fontFamily:'var(--font-mono)', fontSize:13,
            background:'var(--bg-dark)', color:'var(--text-inverse)',
            padding:'2px 8px', borderRadius:4 }}>
            @helixar report [brand]
          </span>
          {' '}in any channel.
        </p>

        {/* Slack button */}
        <a href={slackAuthUrl} style={{ textDecoration:'none', display:'inline-block' }}>
          <button style={{
            height: 52, padding: '0 32px',
            background: '#4A154B', color: '#fff',
            fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600,
            border: 'none', borderRadius: 'var(--r-md)',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
            gap: 10, margin: '0 auto',
            transition: 'opacity 150ms ease',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="20" height="20" viewBox="0 0 122.8 122.8" fill="none">
              <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#E01E5A"/>
              <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36C5F0"/>
              <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2EB67D"/>
              <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ECB22E"/>
            </svg>
            Add to Slack — Free
          </button>
        </a>

        <p style={{ marginTop:16, fontFamily:'var(--font-ui)', fontSize:13,
          color:'var(--text-muted)' }}>
          Takes 30 seconds. No configuration required.
        </p>

        {/* What happens next */}
        <div style={{ marginTop:48, paddingTop:32,
          borderTop:'1px solid var(--border)', textAlign:'left' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:10,
            textTransform:'uppercase', letterSpacing:'0.1em',
            color:'var(--text-muted)', marginBottom:16 }}>
            WHAT HAPPENS NEXT
          </div>
          {[
            { step:'01', text:'Helixar joins your #marketing-intel channel' },
            { step:'02', text:'Type @helixar report [any brand] to run your first brief' },
            { step:'03', text:'Get a full competitor report in under 5 minutes' },
          ].map(item => (
            <div key={item.step} style={{ display:'flex', gap:16,
              marginBottom:14, alignItems:'flex-start' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:11,
                color:'var(--orange)', flexShrink:0, marginTop:1 }}>
                {item.step}
              </span>
              <span style={{ fontFamily:'var(--font-ui)', fontSize:14,
                color:'var(--text-body)', lineHeight:1.5 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
