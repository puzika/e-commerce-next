'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/lib/definitions';
import Section from '../section/section.component';
import ScrollBtnGroup from '../scroll-btn-group/scroll-btn-group.component';
import CardSkeleton from '../card-skeleton/card-skeleton.component';
import Card from '../card/card.component';
import Button from '../button/button.component';
import { getProducts } from '@/lib/data';
import styles from './explore-section.module.scss';

export default function ExploreSection() {
  const [currStartSlide, setCurrStartSlide] = useState<number>(0);
  const [products, setProducts] = useState<Product[] | null>(null);
  const productsCnt = 16;
  const cards = [];

  useEffect(() => {
    getProducts(16)
      .then(data => setProducts(data.products))
      .catch(err => console.log(err));
  }, []);

  for (let i = 0; i < productsCnt; i++) {
    if (!products) {
      cards.push(
        <CardSkeleton key={`explore-skeleton-card-${i}`} />
      )
    } else {
      const { title, price, rating, thumbnail, id } = products[i];

      cards.push(
        <Card
          key={`explore-product-card-${id}`}
          title={title}
          price={price}
          rating={rating}
          thumbnail={thumbnail}
        />
      )
    }
  }

  const handleScrollLeft = () => {
    if (currStartSlide > 0) {
      setCurrStartSlide(currStartSlide - 1);
    }
  }

  const handleScrollRight = () => {
    if (cards.length / 2 - currStartSlide > 4) {
      setCurrStartSlide(currStartSlide + 1);
    }
  }

  return (
    <Section
      title='Our products'
      heading='explore our products'
      action={<ScrollBtnGroup handleScrollLeft={handleScrollLeft} handleScrollRight={handleScrollRight} />}
    >
      <div className={styles.productsWrapper}>
        <div
          style={{ translate: `calc(-${currStartSlide} * ((100% - 3 * 3rem) / 4 + 3rem)) 0`}}
          className={styles.products}
        >
          { cards }
        </div>
      </div>
      <Button title='view all products' />
    </Section>
  )
}