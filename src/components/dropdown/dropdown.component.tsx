'use client';

import type { ReactNode, Ref } from 'react';
import clsx from 'clsx';
import styles from './dropdown.module.scss';

type DropdownProps = {
  children?: ReactNode | ReactNode[],
  content: ReactNode | ReactNode[],
  ref: Ref<HTMLDivElement>,
  open: boolean,
}

export default function Dropdown({ content, children, ref, open }: DropdownProps) {
  return (
    <div 
      ref={ref} 
      className={clsx(styles.dropdown, { [styles.dropdownActive]: open })}
    >
      {content}
      <ul className={styles.dropdownList}>
        { children }
      </ul>
    </div>
  )
}