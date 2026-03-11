'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // TODO (backend): call your real registration endpoint here
    // e.g. await fetch('/api/auth/register', { method:'POST', body: JSON.stringify({email, password}) })
    // For now we sign them in directly via the mock credentials provider
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)
    if (result?.ok) {
      router.push('/connect')
    } else {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* ── LEFT PANEL ── */}
      <div className="auth-left" style={{
        background: 'var(--bg-dark)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 48,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ghost word */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(120px,18vw,220px)',
          color: '#FAF9F7',
          opacity: 0.04,
          position: 'absolute',
          bottom: -20,
          left: -10,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}>HELIXAR</div>

        {/* Logo */}
        <a href="/" style={{ display:'flex', alignItems:'center', gap:4,
          fontFamily:'var(--font-ui)', fontSize:16, fontWeight:700,
          color:'var(--text-inverse)', textDecoration:'none',
          position:'relative', zIndex:1 }}>
          <span style={{ color:'var(--orange)' }}>■</span> HELIXAR
        </a>

        {/* Headline */}
        <div style={{ position:'relative', zIndex:1 }}>
          <div className="ticket-label-dark" style={{ marginBottom:20 }}>
            FREE TO START
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px,5vw,72px)',
            lineHeight: 0.92,
            color: 'var(--text-inverse)',
            letterSpacing: '0.01em',
          }}>
            <div>TYPE A</div>
            <div>COMMAND.</div>
            <div>GET A</div>
            <div><span className="stamp">BRIEF.</span></div>
          </div>
          <p style={{
            marginTop: 24,
            fontFamily: 'var(--font-ui)',
            fontSize: 15,
            color: 'var(--text-inverse-body)',
            lineHeight: 1.65,
            maxWidth: 300,
          }}>
            Connect Helixar to your Slack workspace.
            Your first report is free — no card required.
          </p>
        </div>

        {/* Testimonial */}
        <div style={{ borderLeft:'2px solid rgba(255,94,44,0.5)',
          paddingLeft:16, position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:'var(--font-ui)', fontSize:14,
            fontStyle:'italic', color:'var(--text-inverse-body)', lineHeight:1.6 }}>
            &ldquo;I made the Slack. They didn&rsquo;t. We got the contract.&rdquo;
          </p>
          <div style={{ marginTop:10, fontFamily:'var(--font-ui)',
            fontSize:13, fontWeight:600, color:'var(--text-inverse)' }}>
            Marcus Webb
          </div>
          <div style={{ fontFamily:'var(--font-ui)', fontSize:12,
            color:'var(--text-inverse-muted)' }}>
            Freelance Brand Strategist
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        background: 'var(--bg-base)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}>
        <div style={{ maxWidth:400, width:'100%' }}>

          <h1 style={{ fontFamily:'var(--font-ui)', fontSize:28, fontWeight:700,
            color:'var(--text-primary)', letterSpacing:'-0.02em', margin:0 }}>
            Create your account
          </h1>
          <p style={{ marginTop:8, fontFamily:'var(--font-ui)', fontSize:15,
            color:'var(--text-body)' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color:'var(--orange)', fontWeight:500 }}>
              Sign in
            </a>
          </p>

          {/* Google button */}
          <button
            onClick={() => signIn('google', { callbackUrl: '/connect' })}
            style={{
              marginTop: 32,
              width: '100%',
              height: 48,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              fontFamily: 'var(--font-ui)',
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#A09D9A'
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div style={{ marginTop:24, display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ flex:1, height:1, background:'var(--border)' }} />
            <span style={{ fontFamily:'var(--font-ui)', fontSize:12,
              color:'var(--text-muted)' }}>or</span>
            <div style={{ flex:1, height:1, background:'var(--border)' }} />
          </div>

          {/* Email form */}
          <form onSubmit={handleEmailSignup}
            style={{ marginTop:24, display:'flex', flexDirection:'column', gap:16 }}>

            <div>
              <label style={{ fontFamily:'var(--font-ui)', fontSize:13, fontWeight:500,
                color:'var(--text-primary)', display:'block', marginBottom:6 }}>
                Work email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{
                  width: '100%', height: 44, padding: '0 14px',
                  fontFamily: 'var(--font-ui)', fontSize: 15,
                  color: 'var(--text-primary)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                  boxSizing: 'border-box',
                }}
                onFocus={e  => e.currentTarget.style.borderColor = 'var(--orange)'}
                onBlur={e   => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label style={{ fontFamily:'var(--font-ui)', fontSize:13, fontWeight:500,
                color:'var(--text-primary)', display:'block', marginBottom:6 }}>
                Password
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                style={{
                  width: '100%', height: 44, padding: '0 14px',
                  fontFamily: 'var(--font-ui)', fontSize: 15,
                  color: 'var(--text-primary)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                  boxSizing: 'border-box',
                }}
                onFocus={e  => e.currentTarget.style.borderColor = 'var(--orange)'}
                onBlur={e   => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            {error && (
              <p style={{ fontFamily:'var(--font-ui)', fontSize:13,
                color:'#E53E3E', margin:0 }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width:'100%', height:48, fontSize:15,
                justifyContent:'center', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Creating account...' : 'Create account →'}
            </button>

          </form>

          <p style={{ marginTop:16, fontFamily:'var(--font-ui)', fontSize:12,
            color:'var(--text-muted)', lineHeight:1.6, textAlign:'center' }}>
            By creating an account you agree to our{' '}
            <a href="/terms" style={{ color:'var(--text-body)' }}>Terms</a>
            {' '}and{' '}
            <a href="/privacy" style={{ color:'var(--text-body)' }}>Privacy Policy</a>.
            No credit card required.
          </p>

        </div>
      </div>
    </>
  )
}
