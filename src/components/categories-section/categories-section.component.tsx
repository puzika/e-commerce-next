'use client';

import { useState } from 'react';
import Section from '../section/section.component';
import Link from 'next/link';
import ScrollBtnGroup from '../scroll-btn-group/scroll-btn-group.component';
import categoryIcons from '@/lib/categories';
import { IconContext } from 'react-icons';
import styles from './categories-section.module.scss';

export default function CategoriesSection() {
  const [currStartSlide, setCurrStartSlide] = useState<number>(0);
  const visibleCnt = 6;

  const slides = Object.entries(categoryIcons).map(
    ([category, icon], idx) => (
      <Link 
        key={`categories-section-slide-${idx}`} 
        className={styles.slide}
        href="#"
      >
        <div className={styles.slideContent}>
          { icon }
          <p className={styles.slideText}>
            {category}
          </p>
        </div>
      </Link>
    )
  );

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
        <div style={{ translate: `calc(-${currStartSlide} * ((100% - 3 * 5rem) / 6 + 3rem)) 0`}} className={styles.slider}>
          <IconContext value={{ size: '4rem' }}>
            { slides }
          </IconContext>
        </div>
      </div>
    </Section>
  )
}