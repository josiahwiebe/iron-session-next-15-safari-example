import * as css from './css'

import { SubmitButton } from './submit-button'
import { Input } from './input'
import { getSession } from './using-iron-session/actions'

export async function Form({ getSession, login, logout }: { getSession: any; login: any; logout: any }) {
  const session = await getSession()

  if (session.isLoggedIn) {
    return (
      <>
        <p className='text-lg'>
          Logged in user: <strong>{session.user?.email}</strong>
        </p>
        <LogoutButton action={logout} />
      </>
    )
  }

  return <LoginForm action={login} />
}

function LoginForm({ action }: { action: any }) {
  return (
    <form action={action} className={css.form}>
      <label className='block text-lg'>
        <span className={css.label}>Email</span>
        <Input />
      </label>
      <div>
        <SubmitButton value='Login' />
      </div>
    </form>
  )
}

function LogoutButton({ action }: { action: any }) {
  return (
    <form action={action} className={css.form}>
      <div>
        <SubmitButton value='Logout' />
      </div>
    </form>
  )
}
