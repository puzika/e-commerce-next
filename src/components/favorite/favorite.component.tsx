import { GoHeart, GoHeartFill } from "react-icons/go"
import { IconProps } from "@/lib/definitions";
import styles from './favorite.module.scss';

export default function Favorite({ fill, size }: IconProps) {
  return (
    <div
      className={styles.icon}
      style={{ fontSize: `${size}rem` }}
    >
      {
        fill ? 
          <GoHeartFill /> : 
          <GoHeart /> 
      }
    </div>
  )
}