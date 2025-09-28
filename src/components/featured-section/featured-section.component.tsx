import Section from "../section/section.component";
import Image from "next/image";
import Link from "next/link";
import banners from "@/lib/featured-banners";
import styles from './featured-section.module.scss';

export default function FeaturedSection() {
  const sizes = [
    "(min-width: 340px) calc(50vw - 135px), 30px",
    "(min-width: 340px) calc(50vw - 135px), 30px",
    "calc(25vw - 82px)",
    "calc(25vw - 82px)",
  ];

  return (
    <Section
      title="featured"
      heading="new arrival"
    >
      <div className={styles.banners}>
        {
          banners.map(({ title, alt, image, slogan, category }, idx) => (
            <div 
              key={`featured-section-banner-${idx}`} 
              className={styles[`banner-${idx + 1}`]}
            >
              <div className={styles.bannerText}>
                <p className={styles.bannerTitle}>{title}</p>
                <p className={styles.bannerSlogan}>{slogan}</p>
                <Link className={styles.link} href={`categories/${category}`}>Shop now</Link>
              </div>
              <Image
                src={image}
                title={title}
                fill
                alt={alt}
                sizes={sizes[idx]}
              />
            </div>
          ))
        }
      </div>
    </Section>
  )
}