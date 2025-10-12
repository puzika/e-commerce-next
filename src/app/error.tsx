'use client';

import type { RequestError } from "@/lib/definitions";
import Button from "@/components/button/button.component";
import styles from './error.module.scss';

type ErrorProps = {
  error: Error & { digest?: string },
  reset: () => {},
}

export default function ErrorPage({ error, reset }: ErrorProps ) {
  const {
    title,
    message,
    description
  } = JSON.parse(error.message) as RequestError;

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      <p>{description}</p>
      <Button type="button" handler={() => reset()}>Try again</Button>
    </div>
  )
}