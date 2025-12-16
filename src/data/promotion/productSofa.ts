import sofa1 from "/img/sofa1.png";
import sofa2 from "/img/sofa2.png";
import sofa3 from "/img/sofa3.png";
import sofa4 from "/img/sofa4.png";

import dot_color from "/img/dot_color.png";
import dot_PET from "/img/dot_PET.png";
import dot_777255 from "/img/dot_777255.png";
import dot_7B706A from "/img/dot_7B706A.png";
import dot_FFFFFF from "/img/dot_FFFFFF.png";

import type { ProductItemData } from "../../components/promotions/product/ProductsItem";

const sofaSeriesData: ProductItemData[] = [
  {
    img: sofa1,
    dots: [dot_color, dot_PET, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 모듈형 2인 페브릭소파",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: sofa2,
    dots: [dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: sofa3,
    dots: [dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "아르베 모듈형 2인 페브릭소파",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: sofa4,
    dots: [dot_color, dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 모듈형 2인 페브릭소파",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
];

export default sofaSeriesData;