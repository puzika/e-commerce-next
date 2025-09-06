'use client';

import { IconContext } from "react-icons"
import { GoHeart, GoHeartFill } from "react-icons/go"
import { IconProps } from "@/lib/definitions";

export default function Favorite({ fill, size }: IconProps) {
  return (
    <IconContext.Provider value={{size: `${size}rem`}}>
      {
        fill ? 
          <GoHeartFill /> : 
          <GoHeart /> 
      }
    </IconContext.Provider>
  )
}