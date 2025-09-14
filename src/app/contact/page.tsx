import Button from '@/components/button/button.component';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import styles from './page.module.scss';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.option}>
          <div className={styles.heading}>
            <div className={styles.icon}>
              <FiPhone />
            </div>
            <h2>Call us</h2>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +7 (999) 999-99-99</p>
        </div>
        <div className={styles.option}>
          <div className={styles.heading}>
            <div className={styles.icon}>
              <MdOutlineMail />
            </div>
            <h2>Write to us</h2>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>
      <form className={styles.form} action="">
        <input className={`${styles.input} ${styles.name}`} name="name" required type="text" placeholder='Your name *' />
        <input className={`${styles.input} ${styles.email}`} name="email" required type="email" placeholder="Your email *" />
        <input className={`${styles.input} ${styles.phone}`} name="phone" required type="phone" placeholder="Your phone *" />
        <textarea className={`${styles.textarea} ${styles.message}`} name="message" placeholder='Your message'></textarea>
        <div className={styles.btn}>
          <Button>Send message</Button>
        </div>
      </form>
    </div>
  )
}