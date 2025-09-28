import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type FetchOptions = {
  cache?: 'force-cache' | 'no-store',
  next?: {
    revalidate?: false | 0 | number,
    tag?: string[],
  }
}

export type Review = {
  rating: number,
  comment: string,
  date: string,
  reviewerName: string,
  reviewerEmail: string,
}

export type Product = {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
  images: string[],
  availabilityStatus: string,
  description: string,
  returnPolicy: string,
  warrantyInformation: string,
  reviews: Review[],
};

export type IconProps = {
  size: number,
  fill?: boolean,
}