'use client';

import { useState } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import MensWatch from "public/men's-watch-slider-img.webp";
import Laptop from "public/laptop-slider-img.webp";
import Smartphone from "public/smartphone-slider-img.webp";
import Sunglasses from "public/sunglasses-slider-img.webp";
import Fragrance from "public/fragrance-slider-img.webp";
import styles from './slider.module.scss';

type SlideProps = {
  pos: number,
  src: StaticImport | string,
  alt: string,
  priority?: boolean,
}

function Slide({ pos, src, alt, priority }: SlideProps) {
  return (
    <div 
      style={{ translate: `${pos * 100}% 0`}} 
      className={styles.slide}
    >
      <Image 
        className={styles.slideImage}
        fill
        src={src}
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

  const slides: { image: StaticImport, alt: string }[] = [
    { image: MensWatch, alt: "Men's watches"},
    { image: Laptop, alt: "Laptops"},
    { image: Smartphone, alt: "Smartphones"},
    { image: Sunglasses, alt: "Sunglasses"},
    { image: Fragrance, alt: "Fragrance" },
  ]

  return (
    <div className={styles.slider}>
      {
        slides.map(({ image, alt }, idx) => (
          <Slide 
            key={`slider-slide-${idx}`} 
            pos={idx - currSlide} 
            src={image} 
            alt={alt} 
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