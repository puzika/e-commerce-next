import type { ReactNode } from 'react';
import styles from './auth-form.module.scss';

type AuthFormProps = {
  title: string,
  subheading?: string,
  children?: ReactNode,
  action?: (formData: FormData) => void | Promise<void>
}

export default function AuthForm({ title, subheading, action, children }: AuthFormProps) {
  return (
    <form action={action} className={styles.form}>
      <div className={styles.header}>
        <h1 className={styles.title}>{ title }</h1>
        <p className={styles.subheading}>{ subheading }</p>
      </div>
      { children }
    </form>
  )
}