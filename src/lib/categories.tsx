import type { ReactNode } from 'react';
import { IoMdLaptop } from 'react-icons/io';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { GiWatch } from 'react-icons/gi';
import { FaGlasses } from 'react-icons/fa';
import { TbPerfume, TbToolsKitchen } from 'react-icons/tb';
import { LiaCouchSolid } from 'react-icons/lia';
import { SlHandbag } from 'react-icons/sl';
import { IoShirtOutline } from 'react-icons/io5';

type Category = 
  | "smartphones"
  | "laptops"
  | "mens-watches"
  | "sunglasses"
  | "fragrances"
  | "kitchen-accessories"
  | "furniture"
  | "womens-bags"
  | "mens-shirts"

const categoryIcons: Record<Category, ReactNode> = {
  "smartphones": <MdOutlinePhoneAndroid />,
  "laptops": <IoMdLaptop />,
  "mens-watches": <GiWatch />,
  "sunglasses": <FaGlasses />,
  "fragrances": <TbPerfume/>,
  "kitchen-accessories": <TbToolsKitchen />,
  "furniture": <LiaCouchSolid />,
  "womens-bags": <SlHandbag />,
  "mens-shirts": <IoShirtOutline />,
}

export default categoryIcons;