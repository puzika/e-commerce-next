import styles from './search.module.scss';
import { searchProducts } from '@/lib/actions';
import { LuSearch } from 'react-icons/lu';

type SearchProps = {
  placeholder?: string,
  name: string,
}

export default function Search({ placeholder, name }: SearchProps) {
  const search = searchProducts.bind(null, name);

  return (
    <form action={search} className={styles.search}>
      <input className={styles.input} id={name} name={name} type="text" placeholder={placeholder} />
      <label className={styles.label} htmlFor={name}>
        <LuSearch />
      </label>
    </form>
  )
}