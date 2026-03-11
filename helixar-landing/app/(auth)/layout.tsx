export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-grid" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh',
    }}>
      {children}
    </div>
  )
}
