import ProductsItem from "./ProductsItem";
import type { ProductItemData } from "./ProductsItem";

import '../../../css/Sofa3.css'

interface ProductsProps {
  data: ProductItemData[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <section className="background-image4">
      <div className="sofa-wrapper">
        {data.map((item, idx) => (
          <ProductsItem key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;