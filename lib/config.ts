const ttl = 2592000 // 30 days
export const sessionOptions = {
  password: {
    1: process.env.SESSION_SECRET!,
  },
  cookieName: 'iron-session-next-15-example',
  ttl: ttl,
  sameSite: 'lax',
  maxAge: ttl - 60,
}

export interface SessionData {
  isLoggedIn: boolean
  user?: {
    id: number
    name: string
    email: string
  }
}
