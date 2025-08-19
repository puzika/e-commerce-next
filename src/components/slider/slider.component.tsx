'use client';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import MensWatch from "public/men's-watch-slider-img.webp";
import Laptop from "public/laptop-slider-img.webp";
import Smarphone from "public/smartphone-slider-img.webp";
import Sunglasses from "public/sunglasses-slider-img.webp";
import Fragrance from "public/fragrance-slider-img.webp";
import styles from './slider.module.scss';

type SlideProps = {
  image: string | StaticImport,
  alt: string,
  pos: number,
  priority?: boolean,
}

function Slide({ pos, image, alt, priority }: SlideProps) {
  return (
    <div style={{ translate: `${pos * 100}% 0`}} className={styles.slide}>
      <Image 
        className={styles.slideImage}
        src={image}
        alt={alt}
        fill
        priority={!!priority}
      />
    </div>
  )
}

function SlideBtn() {
  return (
    <button className={styles.btn}></button>
  )
}

type SliderProps = {
  priority?: boolean,
}

export default function Slider({ priority }: SliderProps) {
  const images: { image: StaticImport, alt: string }[] = [
    { image: MensWatch, alt: "Men's watches" },
    { image: Laptop, alt: "Laptop" },
    { image: Smarphone, alt: "Smartphone" },
    { image: Sunglasses, alt: "Sunglasses" },
    { image: Fragrance, alt: "Fragrance" },
  ];

  return (
    <div className={styles.slider}>
      {
        images.map(({ image, alt }, idx) => (
          <Slide 
            key={crypto.randomUUID()} 
            pos={idx} 
            image={image} 
            alt={alt}
            priority={priority}
          />
        ))
      }
      <div className={styles.buttons}>

      </div>
    </div>
  )
}