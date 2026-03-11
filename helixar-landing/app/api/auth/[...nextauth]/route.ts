import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

const { handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: 'Email',
      credentials: {
        email:    { label: 'Email',    type: 'email'    },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO (backend): replace this mock with real DB lookup
        // e.g. const user = await db.user.findUnique({ where: { email: credentials.email } })
        // e.g. const valid = await bcrypt.compare(credentials.password, user.passwordHash)
        if (credentials?.email && credentials?.password) {
          return {
            id: 'mock-user-id',
            email: credentials.email as string,
            name:  (credentials.email as string).split('@')[0],
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn:  '/login',
    newUser: '/signup',
    error:   '/login',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }) {
      if (session.user) (session.user as unknown as Record<string, unknown>).id = token.id as string
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url
      return `${baseUrl}/connect`
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export const { GET, POST } = handlers
