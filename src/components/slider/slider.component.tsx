'use client';

import { useState } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import slides from '@/slides';
import styles from './slider.module.scss';

type SlideProps = {
  pos: number,
  image: StaticImport | string,
  alt: string,
  title: string,
  slogan: string,
  priority?: boolean,
}

function Slide({ pos, image, alt, priority, title, slogan }: SlideProps) {
  return (
    <div 
      style={{ translate: `${pos * 100}% 0`}} 
      className={styles.slide}
    >
      <div className={styles.slideText}>
        <p className={styles.slideTitle}>{title}</p>
        <p className={styles.slideSlogan}>{slogan}</p>
        <Link className={styles.link} href={'#'}>
          <span>Shop now</span>
          <span>&rarr;</span>
        </Link>
      </div>
      <Image 
        className={styles.slideImage}
        src={image}
        alt={alt}
        priority={!!priority}
      />
    </div>
  )
}

type Slider = {
  priority?: boolean,
}

export default function Slider({ priority }: Slider) {
  const [currSlide, setCurrSlide] = useState<number>(0);

  return (
    <div className={styles.slider}>
      {
        slides.map(({ image, alt, title, slogan }, idx) => (
          <Slide 
            key={`slider-slide-${idx}`} 
            pos={idx - currSlide} 
            image={image} 
            alt={alt} 
            title={title}
            slogan={slogan}
            priority={priority} 
          />
        ))
      }
      <div className={styles.btns}>
        {
          slides.map((_, idx) => (
            <button
              key={`slider-btn-${idx}`}
              className={`${styles.btn} ${idx === currSlide ? styles.btnActive : ''}`}
              onClick={() => setCurrSlide(idx)}
            >
            </button>
          ))
        }
      </div>
    </div>
  )
}