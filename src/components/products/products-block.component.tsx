import type { ProductType } from '@/lib/definitions';
import Button from '../button/button.component';
import CardGroup from '../card-group/card-group.component';
import styles from './products-block.module.scss';

type ProductsBlockProps = {
  productName: string,
  products: ProductType[],
  complete?: boolean,
}

export default function ProductsBlock({ productName, products, complete }: ProductsBlockProps) {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>{ productName }</h2>
        { !complete && <Button type='link' href={`categories/${productName}`}>See all</Button> }
      </div>
      <CardGroup products={products} />
    </div>
  )
}