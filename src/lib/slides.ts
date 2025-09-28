import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import MensWatch from "public/men's-watch-slider-img.webp";
import Laptop from "public/laptop-slider-img.webp";
import Smartphone from "public/smartphone-slider-img.webp";
import Sunglasses from "public/sunglasses-slider-img.webp";
import Fragrance from "public/fragrance-slider-img.webp";

type Slide = {
  image: StaticImport | string,
  alt: string,
  title: string,
  slogan: string,
  category: string,
}

const slides: Slide[] = [
  { image: MensWatch, alt: "Men's watches", title: "Men's watches", slogan: "Where tradition meets precision", category: "mens-watches" },
  { image: Laptop, alt: "Laptops", title: "Laptops", slogan: "Your partner in performance", category: "laptops" },
  { image: Smartphone, alt: "Smartphones", title: "Smartphones", slogan: "Never Miss a Shot", category: "smartphones" },
  { image: Sunglasses, alt: "Sunglasses", title: "Sunglasses", slogan: "Live in your shade", category: "sunglasses" },
  { image: Fragrance, alt: "Fragrances", title: "Fragrances", slogan: "Command the air around you", category: "fragrances" },
]

export default slides;