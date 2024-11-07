import * as css from './css'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Index() {
  return (
    <main className='p-10 space-y-5'>
      <h1 className='text-2xl font-bold'>iron-session-next15-safari-example</h1>
      <p>
        <Link href='/using-iron-session' className={css.link}>
          Try example using iron-session
        </Link>
      </p>

      <p>
        <Link href='/using-seal' className={css.link}>
          Try example using iron-session seal/unseal
        </Link>
      </p>
    </main>
  )
}
