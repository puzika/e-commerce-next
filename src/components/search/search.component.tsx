import styles from './search.module.scss';
import { LuSearch } from 'react-icons/lu';

type SearchProps = {
  placeholder?: string,
  name: string,
}

export default function Search({ placeholder, name }: SearchProps) {
  return (
    <form className={styles.search}>
      <input className={styles.input} id={name} name={name} type="text" placeholder={placeholder} />
      <label className={styles.label} htmlFor={name}>
        <LuSearch />
      </label>
    </form>
  )
}