'use server'
import { cookies, headers } from 'next/headers'
import { SessionData, sessionOptions } from '../../lib/config'
import { getIronSession } from 'iron-session'
import { revalidatePath } from 'next/cache'

export async function getSession() {
  const cookieData = await cookies()
  const session = await getIronSession<SessionData | any>(cookieData, sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = false
    delete session.user
  }

  return session
}

export async function login() {
  const session = await getSession()

  session.user = {
    id: 1,
    name: 'Alice',
    email: 'hi@email.com',
  }
  session.isLoggedIn = true

  await session.save()
  revalidatePath('/using-iron-session')
}

export async function logout() {
  const session = await getSession()
  session.destroy()
  revalidatePath('/using-iron-session')
}
