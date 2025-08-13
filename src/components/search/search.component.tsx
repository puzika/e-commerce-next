'use client';

import styles from './search.module.scss';
import { LuSearch } from 'react-icons/lu';
import { GoHeart } from 'react-icons/go';
import { IconContext } from 'react-icons';

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
      <IconContext.Provider value={{ size: "3rem"}}>
        <GoHeart />
      </IconContext.Provider>
    </form>
  )
}