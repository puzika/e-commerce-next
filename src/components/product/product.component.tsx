'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/definitions';
import { GoHeart } from 'react-icons/go';
import Image from 'next/image';
import Stars from '../stars/stars.component';
import ButtonsCnt from '../buttons-cnt/buttons-cnt.component';
import Button from '../button/button.component';
import clsx from 'clsx';
import styles from './product.module.scss';

type ProductProps = {
  product: Product,
}

export default function Product({ product }: ProductProps) {
  const [currImg, setCurrImg] = useState<number>(0);
  const [cnt, setCnt] = useState<number>(0);
  const { 
    images, 
    title, 
    rating, 
    availabilityStatus,
    price,
    description,
    returnPolicy,
    warrantyInformation,
  } = product;

  const sideImages = useMemo(() => images.map((img, idx) => (
    <div 
      key={`product-view-image-${idx}`} 
      className={clsx(styles.imgWrapper, {[styles.imgWrapperCurr]: idx === currImg})}
      onClick={() => setCurrImg(idx)}
    >
      <Image
        className={styles.img}
        src={img}
        alt={`${title} image ${idx + 1}`}
        fill
        priority
        sizes="(min-width: 380px) calc(13.85vw - 41px), calc(15vw - 44px)"
      />
    </div>
  )), [currImg, product]);

  const handleDecrement = async () => {
    if (cnt > 0) setCnt(cnt - 1);
  }

  const handleIncrement = async () => {
    setCnt(cnt + 1);
  }

  return (
    <div className={styles.product}>
      <div className={styles.images}>
        { sideImages }
        <div className={`${styles.imgWrapper} ${styles.currImg}`}>
          <Image
            className={styles.img}
            src={images[currImg]}
            alt={`${title} current image`}
            fill
            priority
            sizes="calc(46.15vw - 133px)"
          />
        </div>
      </div>
      <div className={styles.detailsWrapper}>
        <div className={`${styles.details} ${styles.detailsTop}`}>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.stats}>
            <Stars rating={rating} />
            <span className={styles.separatorVertical}></span>
            <p className={styles.availability}>{availabilityStatus}</p>
          </div>
          <p className={styles.price}>${price}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.separatorHorizontal}></div>
        <div className={`${styles.details} ${styles.detailsBottom}`}>
          <p className={styles.detail}><span className={styles.detailName}>Return policy: </span>{returnPolicy}</p>
          <p className={styles.detail}><span className={styles.detailName}>Warranty: </span>{warrantyInformation}</p>
          <div className={styles.buttons}>
            <ButtonsCnt 
              count={cnt} 
              handleIncrement={handleDecrement} 
              handleDecrement={handleIncrement} 
            />
            <Button type="link" href='#'>Buy now</Button>
            <button aria-label="Favorite button" className={styles.favorite}>
              <GoHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}