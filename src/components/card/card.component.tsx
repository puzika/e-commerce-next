import Image from 'next/image';
import Stars from '../stars/stars.component';
import { GoHeart } from 'react-icons/go';
import Link from 'next/link';
import styles from './card.module.scss';

type CardProps = {
  thumbnail: string,
  title: string,
  price: number,
  rating: number,
  id: string,
}

export default function Card({ thumbnail, title, price, rating, id }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link className={styles.imageLink} href={`/${id}`}>
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(min-width: 1200px) calc(25vw - 82px), 201px"
            className={styles.image}
          />
        </Link>
        <button aria-label='Add to favorites' className={styles.favorite}>
          <GoHeart />
        </button>
        <button className={styles.btn}>Add to card</button>
      </div>
      <Link className={styles.title} href={`/${id}`}>{title}</Link>
      <p className={styles.price}>${price}</p>
      <div className={styles.rating}>
        <Stars rating={rating} />
        <span>({rating})</span>
      </div>
    </div>
  )
}