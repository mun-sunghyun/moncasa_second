import light1 from "/img/light1.png";
import light2 from "/img/light2.png";
import light3 from "/img/light3.png";
import light4 from "/img/light4.png"; // light4가 table4로 되어있던 걸 수정

import dot_color from "/img/dot_color.png";
import dot_PET from "/img/dot_PET.png";
import dot_777255 from "/img/dot_777255.png";
import dot_7B706A from "/img/dot_7B706A.png";
import dot_FFFFFF from "/img/dot_FFFFFF.png";

import type { ProductItemData } from "../../components/promotions/product/ProductsItem";

const lightSeriesData: ProductItemData[] = [
  {
    img: light1,
    dots: [dot_color, dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 조명 1",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: light2,
    dots: [dot_color, dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 조명 2",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: light3,
    dots: [dot_color, dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 조명 3",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
  {
    img: light4,
    dots: [dot_color, dot_PET, dot_777255, dot_7B706A, dot_FFFFFF],
    title: "마이스터 컬렉션 아르베 조명 4",
    priceOriginal: "3,210,000원",
    priceDiscount: "2,889,000원",
  },
];

export default lightSeriesData;
