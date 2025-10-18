import type { ProductType } from "@/lib/definitions";
import Card from "../card/card.component";
import styles from './card-group.module.scss';

type CardGroupProps = {
  productsPromise: Promise<{ products: ProductType[]}>,
}

export default async function CardGroup({ productsPromise }: CardGroupProps) {
  const { products } = await productsPromise;

  return (
    <div className={styles.cards}>
        {
          products.map(({ id, ...props }) => (
            <Card
              key={`${crypto.randomUUID()}-${id}`}
              id={`${id}`}
              {...props}
            />
          ))
        }
      </div>
  )
}