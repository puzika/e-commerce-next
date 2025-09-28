'use client';

import { useState, useMemo } from 'react';
import employeeCards from '@/lib/staff';
import Image from 'next/image';
import Link from 'next/link';
import ScrollBtn from '../scroll-btn/scroll-btn.component';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import styles from './staff.module.scss';

export default function Staff() {
  const slidesVisibleCnt = 3;
  const [currStartSlide, setCurrStartSlide] = useState<number>(0);

  const cards = useMemo(() => employeeCards.map(({ name, position, img }) => (
    <div 
      key={`staff-employee-card-${crypto.randomUUID()}`} 
      className={styles.card}
      style={{flex: `1 0 calc((100% - 2 * 5rem) / ${slidesVisibleCnt})`}}
    >
      <div className={styles.cardImgWrapper}>
        <Image
          className={styles.cardImg}
          src={img}
          alt={`${name}: ${position}`}
          fill
          sizes="(min-width: 760px) calc(30vw - 105px), 114px"
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <div className={styles.socialMedia}>
        <Link href="#"><FaXTwitter /></Link>
        <Link href="#"><FaInstagram /></Link>
        <Link href="#"><FaLinkedinIn /></Link>
      </div>
    </div>
  )), []);

  const handleScrollLeft = () => {
    setCurrStartSlide(currStartSlide > 0 ? currStartSlide - 1 : currStartSlide);
  }

  const handleScrollRight = () => {
    setCurrStartSlide(employeeCards.length - currStartSlide > slidesVisibleCnt ? currStartSlide + 1 : currStartSlide);
  }

  return (
    <div className={styles.staffSlideShow}>
      <div className={styles.staffWrapper}>
        <div 
          className={styles.staff}
          style={{ 
            translate: `calc(-${currStartSlide} * ((100% - 2 * 5rem) / ${slidesVisibleCnt} + 5rem)) 0`
          }}
        >
          { cards }
        </div>
      </div>
      <div className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}>
        <ScrollBtn size={3.5} direction='left' handler={handleScrollLeft} />
      </div>
      <div className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}>
        <ScrollBtn size={3.5} direction='right' handler={handleScrollRight} />
      </div>
    </div>
  )
}