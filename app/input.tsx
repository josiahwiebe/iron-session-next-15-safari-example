'use client'

import * as css from './css'
import { useFormStatus } from 'react-dom'

export function Input() {
  const { pending } = useFormStatus()

  return (
    <input
      type='text'
      disabled={pending}
      name='email'
      className={css.input}
      placeholder=''
      defaultValue='hi@email.com'
      required
      // for demo purposes, disabling autocomplete 1password here
      autoComplete='off'
      data-1p-ignore
    />
  )
}
