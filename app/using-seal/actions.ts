'use server'
import { cookies } from 'next/headers'
import { SessionData, sessionOptions } from '../../lib/config'
import { sealData, unsealData } from 'iron-session'
import { revalidatePath } from 'next/cache'

export async function getSessionSeal() {
  const cookieData = await cookies()
  const sessionCookie = cookieData.get(`${sessionOptions.cookieName}-seal`)
  if (!sessionCookie) return { isLoggedIn: false }
  let session = await unsealData<SessionData | any>(sessionCookie?.value, sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = false
    delete session.user
  }

  return session
}

export async function loginWithSeal() {
  const cookieStore = await cookies()

  const session: SessionData = {
    isLoggedIn: true,
    user: {
      id: 1,
      name: 'Alice',
      email: 'hi@email.com',
    },
  }

  const data = await sealData(session, sessionOptions)

  await cookieStore.set(`${sessionOptions.cookieName}-seal`, data, {
    expires: new Date(Date.now() + sessionOptions.ttl * 1000),
    maxAge: sessionOptions.maxAge,
  })

  revalidatePath('/using-seal')
}

export async function logoutWithSeal() {
  const cookieStore = await cookies()
  await cookieStore.delete(`${sessionOptions.cookieName}-seal`)
  revalidatePath('/using-seal')
}
