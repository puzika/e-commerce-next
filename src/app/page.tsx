import Sidebar from "@/components/sidebar/sidebar.component"
import Slider from "@/components/slider/slider.component";
import CategoriesSection from "@/components/categories-section/categories-section.component";
import BestSellingSection from "@/components/bestselling-section/bestselling-section.component";
import ExploreSection from "@/components/explore-section/explore-section.component";
import FeaturedSection from "@/components/featured-section/featured-section.component";
import Services from "@/components/services/services.component";
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={styles.horizontal}>
        <Sidebar />
        <Slider priority={true} />
      </div>
      <CategoriesSection />
      <BestSellingSection />
      <ExploreSection />
      <FeaturedSection />
      <Services />
    </>
  )
}