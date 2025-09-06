export type FetchOptions = {
  cache?: 'force-cache' | 'no-store',
  next?: {
    revalidate?: false | 0 | number,
    tag?: string[],
  }
}

export type Product = {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
};

export type IconProps = {
  size: number,
  fill?: boolean,
}