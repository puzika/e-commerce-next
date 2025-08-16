'use client';

import { IconContext } from "react-icons"
import { GoHeart, GoHeartFill } from "react-icons/go"
import styles from './favorite.module.scss'

type FavoriteProps = {
  fill?: boolean,
}

export default function Favorite({ fill }: FavoriteProps) {
  return (
    <IconContext.Provider value={{size: '3.5rem'}}>
      {
        fill ? 
          <GoHeartFill className={styles.favorite} /> : 
          <GoHeart className={styles.favorite} /> 
      }
    </IconContext.Provider>
  )
}