import { Product as ProductType } from '../../utils/types'
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = (props) => {
  if (props.products === null) {
    return (
      <h3>Loading...</h3>
    )
  }
  console.log(props)
  return (
    <div>
      {props.products.products.map(product =>
        <Product product={product} />
      )}
    </div>
  )
}

export default ProductList