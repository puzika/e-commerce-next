import Button from '@/components/button/button.component';
import TextField from '@/components/text-field/text-field.component';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import sharedStyles from '@/shared-styles/input.module.scss';
import styles from './page.module.scss';

export default function ContactPage() {
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
        <div className={styles.name}>
          <TextField fieldType="input" name="name" required inputType="text" placeholder="Your name *" />
        </div>
        <div className={styles.email}>
          <TextField fieldType="input" name="email" required inputType="email" placeholder="Your email *" />
        </div>
        <div className={styles.phone}>
          <TextField fieldType="input" name="phone" required inputType="phone" placeholder="Your phone *" />
        </div>
        <div className={styles.message}>
          <TextField fieldType="textarea" name="message" placeholder='Your message' />
        </div>
        <div className={styles.btn}>
          <Button type='button'>Send message</Button>
        </div>
      </form>
    </div>
  )
}