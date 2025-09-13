import type { ReactNode } from 'react';
import { LiaTruckSolid } from 'react-icons/lia';
import { PiHeadset } from 'react-icons/pi';
import { GoShieldCheck } from 'react-icons/go';

type Services = {
  icon: ReactNode,
  heading: string,
  description: string,
}

const services: Services[] = [
  { icon: <LiaTruckSolid />, heading: 'free and fast delivery', description: 'Free delivery for all orders over $140'},
  { icon: <PiHeadset />, heading: '24/7 customer service', description: 'Friendly 24/7 customer support'},
  { icon: <GoShieldCheck />, heading: 'money back guarantee', description: 'We return money within 30 days'},
]

export default services;