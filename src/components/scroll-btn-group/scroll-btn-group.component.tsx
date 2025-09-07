import ScrollBtn from "../scroll-btn/scroll-btn.component"
import styles from './scroll-btn-group.module.scss';

type ScrollBtnGroupProps = {
  handleScrollLeft: () => void,
  handleScrollRight: () => void,
}

export default function ScrollBtnGroup({ handleScrollLeft, handleScrollRight}: ScrollBtnGroupProps) {
  return (
    <div className={styles.scrollBtnGroup}>
      <ScrollBtn direction='left' handler={handleScrollLeft} />
      <ScrollBtn direction='right' handler={handleScrollRight} />
    </div>
  )
}