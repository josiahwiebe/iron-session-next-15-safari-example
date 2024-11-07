'use client'

import { useFormStatus } from 'react-dom'
import * as css from './css'

export function SubmitButton({ value }: { value: string }) {
  const { pending } = useFormStatus()

  return <input type='submit' value={pending ? 'Loading…' : value} disabled={pending} className={css.button} />
}
