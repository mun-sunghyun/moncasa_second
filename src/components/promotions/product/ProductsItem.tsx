import React from "react";
import '../../../css/Sofa3.css'

export interface ProductItemData {
  img: string;
  dots: string[];
  title: string;
  priceOriginal: string;
  priceDiscount?: string;
}

interface ProductsItemProps {
  item: ProductItemData;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ item }) => {
  return (
    <div className="product-item">
      <img src={item.img} alt={item.title} />
      <div className="dot-wrapper">
        {item.dots.map((dot, idx) => (
          <img key={idx} src={dot} alt={`dot-${idx}`} />
        ))}
      </div>
      <p className="product_words">{item.title}</p>
      <div className="word-wrapper">
        <p className="word1">{item.priceOriginal}</p>
        {item.priceDiscount && <p className="word2">{item.priceDiscount}</p>}
      </div>
    </div>
  );
};

export default ProductsItem;