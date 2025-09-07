import Image from 'next/image';
import Stars from '../stars/stars.component';
import Favorite from '../favorite/favorite.component';
import Link from 'next/link';
import styles from './card.module.scss';
import sharedStyles from '@/shared-styles/card.module.scss';

type CardProps = {
  thumbnail: string,
  title: string,
  price: number,
  rating: number,
}

export default function Card({ thumbnail, title, price, rating }: CardProps) {
  return (
    <div className={sharedStyles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(min-width: 1200px) calc(25vw - 82px), 201px"
          className={styles.image}
        />
        <button aria-label='Add to favorites' className={styles.favorite}>
          <Favorite size={2.5} />
        </button>
      </div>
      <Link className={styles.title} href="#">{title}</Link>
      <p className={styles.price}>${price}</p>
      <div className={styles.rating}>
        <Stars rating={rating} />
        <span>({rating})</span>
      </div>
    </div>
  )
}