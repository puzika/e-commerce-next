import type { ReactNode } from "react";
import styles from './form-item.module.scss';

type FormItemProps = {
  children?: ReactNode,
  errors?: string[],
}

export default function FormItem({ errors, children }: FormItemProps) {
  return (
    <div className={styles.item}>
      { children }
      { errors?.map(err => <p key={crypto.randomUUID()} className={styles.error}>{ err }</p>) }
    </div>
  )
}