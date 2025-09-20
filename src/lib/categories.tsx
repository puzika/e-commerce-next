import type { ReactNode } from 'react';
import { IoMdLaptop } from 'react-icons/io';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { GiWatch } from 'react-icons/gi';
import { FaGlasses } from 'react-icons/fa';
import { TbPerfume, TbToolsKitchen } from 'react-icons/tb';
import { LiaCouchSolid } from 'react-icons/lia';
import { SlHandbag } from 'react-icons/sl';
import { IoShirtOutline } from 'react-icons/io5';

const categories: { category: string, icon: ReactNode }[] = [
  { category: "smartphones", icon: <MdOutlinePhoneAndroid />},
  { category: "laptops", icon: <IoMdLaptop />},
  { category: "mens-watches", icon: <GiWatch />},
  { category: "sunglasses", icon: <FaGlasses />},
  { category: "fragrances", icon: <TbPerfume />},
  { category: "kitchen-accessories", icon: <TbToolsKitchen />},
  { category: "furniture", icon: <LiaCouchSolid />},
  { category: "womens-bags", icon: <SlHandbag />},
  { category: "mens-shirts", icon: <IoShirtOutline />},
];

export default categories;