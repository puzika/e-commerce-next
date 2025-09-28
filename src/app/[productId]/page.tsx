import { getProduct } from "@/lib/data";
import Product from "@/components/product/product.component";
import Reviews from "@/components/reviews/reviews.component";
import styles from './page.module.scss'

type ProductPageProps = {
  params: Promise<{ productId: string }>,
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = await getProduct(`${productId}`);
  
  return (
    <div className={styles.container}>
      <Product product={product} />
      <Reviews rating={product.rating} reviews={product.reviews} />
    </div>
  )
}