import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import BannerOne from 'public/featured-banner-1.webp';
import BannerTwo from 'public/featured-banner-2.webp';
import BannerThree from 'public/featured-banner-3.webp';
import BannerFour from 'public/featured-banner-4.webp';

type Banner = {
  image: StaticImport | string,
  alt: string,
  title: string,
  slogan: string,
}

const banners: Banner[] = [
  { image: BannerOne, alt: "Kitchen accessories", title: "Kitchen accessories", slogan: "The Right Tool for the Job" },
  { image: BannerTwo, alt: "Women's bag", title: "Women's bag", slogan: "More Than a Bag, It's a Legacy" },
  { image: BannerThree, alt: "Men's T-shirt", title: "Men's T-shirt", slogan: "Timeless Style, Unmatched Comfort" },
  { image: BannerFour, alt: "Perfume", title: "Perfume", slogan: "An Olfactory Secret" },
];

export default banners;