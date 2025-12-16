import MainVisual from "./MainVisual";
import Serise from "./Serise/Serise";
import Products from "./product/Products";
import EventBanner from "./EventBanner";

import sofa from '/img/sofa.png';
import table from '/img/table.png';
import light from '/img/light.png';

import mainVisualData from "../../data/promotion/mainVisual";
import type { MainVisualData } from "../../data/promotion/mainVisual";

import sofaSeriesData from "../../data/promotion/sofa";
import tableSeriesData from "../../data/promotion/table";
import lightSeriesData from "../../data/promotion/light";

import sofaProductData from "../../data/promotion/productSofa";
import tableProductData from "../../data/promotion/productTable";
import lightProductData from "../../data/promotion/productLight";
{/*
interface Furniture {
  img: string;
  title1: string;
  title2: string;
}
*/}

interface PromotionSectionProps {
  //data: Furniture[];
  data: MainVisualData[];
}

const seriesDataMap = {
  sofa: sofaSeriesData,
  table: tableSeriesData,
  light: lightSeriesData,
} as const;

const productDataMap = {
  sofa: sofaProductData,
  table: tableProductData,
  light: lightProductData,
} as const;

export default function PromotionSection({ data }: PromotionSectionProps) { 
  return (
    <>
    {data.map((item) => (
      <div key={item.id}>
      <MainVisual data={item}></MainVisual>
      <Serise {...seriesDataMap[item.id]}></Serise>
      <Products data={productDataMap[item.id]} ></Products>
      {/* <EventBanner ></EventBanner> */}
      </div>
    ))}
    </>
    
  )
}
