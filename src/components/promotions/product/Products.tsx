import ProductsItem from "./ProductsItem";
import type { ProductItemData } from "./ProductsItem";

import '../../../css/Sofa3.scss'

interface ProductsProps {
  data: ProductItemData[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <section className="background-image4 w-full">
      <div className="flex justify-center gap-5 pt-32 pb-32">
        {data.map((item, idx) => (
          <ProductsItem key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;