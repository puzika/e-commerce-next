import styles from './button.module.scss';

type ButtonProps = {
  title: string,
  handler?: () => void,
}

export default function Button({ title, handler}: ButtonProps) {
  return (
    <button onClick={handler} className={styles.btn}>
      { title }
    </button>
  )
}