import * as css from '../css'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import { Form } from '../form'
import { sessionOptions } from '../../lib/config'
import { getSessionSeal, loginWithSeal, logoutWithSeal } from './actions'
import Link from 'next/link'

async function CookiesComponent() {
  const allCookies = await cookies()
  const cookieEntries = allCookies.get(`${sessionOptions.cookieName}-seal`)

  return <code>{JSON.stringify(cookieEntries, null, 2)}</code>
}

export default async function SessionSeal() {
  return (
    <main className='p-10 space-y-5'>
      <h1 className='text-2xl font-bold'>using iron-session seal/unseal</h1>
      <p className='italic max-w-xl'>
        <u>How to test</u>: Login and refresh the page to see iron-session in action.
      </p>

      <div className='grid grid-cols-1 gap-4 p-10 border border-slate-500 rounded-md max-w-xl'>
        <Suspense fallback={<p className='text-lg'>Loading...</p>}>
          <Form getSession={getSessionSeal} login={loginWithSeal} logout={logoutWithSeal} />
        </Suspense>
      </div>

      <p>
        <Link href='/' className={css.link}>
          ← All examples
        </Link>
      </p>
      <p>
        <Link href='/using-iron-session' className={css.link}>
          Try example using iron-session
        </Link>
      </p>

      <div>
        <Suspense fallback={<p className='text-lg'>Loading...</p>}>
          <CookiesComponent />
        </Suspense>
      </div>
    </main>
  )
}
