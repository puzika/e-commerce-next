import Image from "next/image"
import AboutImg from 'public/about.png'
import Services from "@/components/services/services.component"
import StatCard from "@/components/stat-card/stat-card.component"
import Staff from "@/components/staff/staff.component"
import { AiOutlineShop } from "react-icons/ai"
import { AiOutlineDollar } from "react-icons/ai"
import { IoBagHandleOutline } from "react-icons/io5"
import { TbMoneybag } from "react-icons/tb"
import styles from './page.module.scss'

export default function About() {
  return (
    <>
      <article className={styles.container}>
        <div className={styles.story}>
          <h2 className={styles.storyHeading}>Our story</h2>
          <div className={styles.storyText}>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
          </div>
        </div>
        <div className={styles.storyImg}>
          <Image 
            src={AboutImg}
            alt={"Side image"}
            fill
            priority
          />
        </div>
      </article>
      <div className={styles.stats}>
        <StatCard icon={<AiOutlineShop />} stat="10.5k" description="Sellers active on our site" />
        <StatCard icon={<AiOutlineDollar />} stat="33k" description="Monthly sales" />
        <StatCard icon={<IoBagHandleOutline />} stat="45.5k" description="Customer active on our site" />
        <StatCard icon={<TbMoneybag />} stat="25k" description="Anual gross sale on our site" />
      </div>
      <Staff />
      <Services />
    </>
  )
}