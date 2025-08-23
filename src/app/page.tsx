import Sidebar from "@/components/sidebar/sidebar.component"
import Slider from "@/components/slider/slider.component";
import Section from "@/components/section/section.component";
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.horizontal}>
        <Sidebar />
        <Slider priority />
      </div>
      <Section title="categories" heading="browse by category" />
    </>
  )
}