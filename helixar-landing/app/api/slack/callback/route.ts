import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const code  = request.nextUrl.searchParams.get('code')
  const error = request.nextUrl.searchParams.get('error')

  if (error || !code) {
    return NextResponse.redirect(new URL('/connect?error=denied', request.url))
  }

  try {
    const res = await fetch('https://slack.com/api/oauth.v2.access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id:     process.env.SLACK_CLIENT_ID!,
        client_secret: process.env.SLACK_CLIENT_SECRET!,
        code,
        redirect_uri:  process.env.SLACK_REDIRECT_URI!,
      }),
    })

    const data = await res.json()

    if (!data.ok) {
      return NextResponse.redirect(new URL('/connect?error=slack_failed', request.url))
    }

    // TODO (backend): save workspace connection to database
    // data.access_token  — the bot token to store
    // data.team.id       — Slack workspace ID
    // data.team.name     — Slack workspace name
    // data.authed_user.id — the user who installed it
    // e.g. await db.workspace.create({ data: { slackTeamId: data.team.id, botToken: data.access_token } })

    return NextResponse.redirect(new URL('/connect/success', request.url))

  } catch {
    return NextResponse.redirect(new URL('/connect?error=server_error', request.url))
  }
}
