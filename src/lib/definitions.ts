export type FetchOptions = {
  cache?: 'force-cache' | 'no-store',
  next?: {
    revalidate?: false | 0 | number,
    tag?: string[],
  }
}

export type ReviewType = {
  rating: number,
  comment: string,
  date: string,
  reviewerName: string,
  reviewerEmail: string,
}

export type ProductType = {
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
  reviews: ReviewType[],
};

export type IconProps = {
  size: number,
  fill?: boolean,
}

export type Request = {
  url: string,
  options?: FetchOptions & { timeout?: number },
  errorDescription?: string,
}

export type RequestError = {
  title: string,
  message: string,
  description?: string,
}