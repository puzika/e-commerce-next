'use client';

import CircleIcon from '../circle-icon/circle-icon.component';
import { IconContext } from 'react-icons';
import { circleIconSize } from '@/lib/variables';
import services from '@/lib/services';
import styles from './services.module.scss';

export default function Services() {
  return (
    <div className={styles.services}>
      <IconContext.Provider value={{ size: `${circleIconSize}rem` }}>
        {
          services.map(({ icon, heading, description}, idx) => (
            <div key={`services-section-item-${idx}`} className={styles.service}>
              <CircleIcon icon={icon} />
              <p className={styles.serviceHeading}>{ heading }</p>
              <p className={styles.serviceDescription}>{ description }</p>
            </div>
          ))
        }
      </IconContext.Provider>
    </div>
  )
}