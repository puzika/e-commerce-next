'use client';

import { useState, useEffect, useMemo } from 'react';
import type { ProductType } from '@/lib/definitions';
import Section from '../section/section.component';
import ScrollBtnGroup from '../scroll-btn-group/scroll-btn-group.component';
import CardSkeleton from '../card-skeleton/card-skeleton.component';
import Card from '../card/card.component';
import Button from '../button/button.component';
import { getProducts } from '@/lib/data';
import styles from './explore-section.module.scss';

export default function ExploreSection() {
  const [currStartSlide, setCurrStartSlide] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const productsCnt = 16;
  const visibleCardsCnt = 4; 

  useEffect(() => {
    getProducts(productsCnt)
      .then(data => setProducts(data.products))
  }, []);

  const cards = useMemo(() => {
    const res = [];

    for (let i = 0; i < productsCnt; i++) {
      if (!products) {
        res.push(
          <CardSkeleton key={`explore-skeleton-card-${crypto.randomUUID()}`} />
        )
      } else {
        const { id, ...props } = products[i];

        res.push(
          <Card
            key={`explore-product-card-${id}`}
            id={`${id}`}
            {...props}
          />
        )
      }
    }

    return res;
  }, [products]);

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
          style={{ translate: `calc(-${currStartSlide} * ((100% - ${visibleCardsCnt - 1} * 3rem) / ${visibleCardsCnt} + 3rem)) 0`}}
          className={styles.products}
        >
          { cards }
        </div>
      </div>
      <Button type='link' href="categories">view all products</Button>
    </Section>
  )
}