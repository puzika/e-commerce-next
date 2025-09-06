import Sidebar from "@/components/sidebar/sidebar.component"
import Slider from "@/components/slider/slider.component";
import CategoriesSection from "@/components/categories-section/categories-section.component";
import BestSellingSection from "@/components/bestselling-section/bestselling-section.component";
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.horizontal}>
        <Sidebar />
        <Slider priority />
      </div>
      <CategoriesSection />
      <BestSellingSection />
    </>
  )
}