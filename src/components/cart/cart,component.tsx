'use client';

import { IconContext } from 'react-icons';
import { IoCartOutline } from 'react-icons/io5';
import type { IconProps } from '@/lib/definitions';

export default function Cart({ size }: IconProps) {
  return (
    <IconContext.Provider value={{ size: `${size}rem` }}>
      <IoCartOutline />
    </IconContext.Provider>
  )
}