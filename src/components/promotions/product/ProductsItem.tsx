import React from "react";
import '../../../css/Sofa3.scss'

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
    <div className="product-item w-[100px] md:w-[200px] lg:w-[300px]">
      <img src={item.img} alt={item.title} className="block mx-auto" />
      <div className="flex gap-1">
        {item.dots.map((dot, idx) => (
          <img key={idx} src={dot} alt={`dot-${idx}`} className="w-[5%] sm:w-[8%] md:w-[10px]"/>
        ))}
      </div>
      <p className="font-pretendardBold text-[10px] md:text-[17px] xl:text-[25px] mt-[5%] leading-[1.4] min-h-[70px]">{item.title}</p>
      <div className="flex justify-between">
        <p className="font-pretendardMedium text-[#ADADAD] line-through text-[5px] md:text-[10px] xl:text-[20px]">{item.priceOriginal}</p>
        {item.priceDiscount && <p className="font-pretendardBold text-[#713131] text-right text-[5px] md:text-[15px] xl:text-[25px]">{item.priceDiscount}</p>}
      </div>
    </div>
  );
};

export default ProductsItem;