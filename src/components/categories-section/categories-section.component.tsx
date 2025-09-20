'use client';

import { useState, useMemo } from 'react';
import Section from '../section/section.component';
import Link from 'next/link';
import ScrollBtnGroup from '../scroll-btn-group/scroll-btn-group.component';
import categories from '@/lib/categories';
import styles from './categories-section.module.scss';

export default function CategoriesSection() {
  const [currStartSlide, setCurrStartSlide] = useState<number>(0);
  const visibleCnt = 6;

  const slides = useMemo(() => categories.map(
    ({ category, icon }) => (
      <Link 
        key={`categories-section-slide-${crypto.randomUUID()}`} 
        href="#"
        className={styles.slide}
        style={{
          flex: `1 0 calc((100% - ${visibleCnt - 1} * 3rem) / ${visibleCnt})`,
        }}
      >
        <div className={styles.slideContent}>
          <div className={styles.iconWrapper}>
            { icon }
          </div>
          <p className={styles.slideText}>
            {category}
          </p>
        </div>
      </Link>
    )
  ), []);

  const handleScrollRight = () => {
    if (slides.length - visibleCnt > currStartSlide) {
      setCurrStartSlide(currStartSlide + 1);
    }
  }

  const handleScrollLeft = () => {
    if (currStartSlide > 0) {
      setCurrStartSlide(currStartSlide - 1);
    }
  }

  return (
    <Section 
      title="categories" 
      heading="browse by category" 
      action={<ScrollBtnGroup handleScrollLeft={handleScrollLeft} handleScrollRight={handleScrollRight} />}
    >
      <div className={styles.sliderWrapper}>
        <div 
          className={styles.slider}
          style={{ translate: `calc(-${currStartSlide} * ((100% - ${visibleCnt - 1} * 3rem) / ${visibleCnt} + 3rem)) 0`}} 
        >
          { slides }
        </div>
      </div>
    </Section>
  )
}