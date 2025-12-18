import Main from "../components/sections/Main";
import Taste from "../components/sections/Taste";
import Postscript from "../components/sections/Postscript";
import Interior from "../components/sections/Interior";
import Lineup from "../components/sections/Lineup";
import PromotionSection from "../components/promotions/PromotionSection";

import sofa from '/img/sofa.png';			
import table from '/img/table.png';
import light from '/img/light.png';

import MainVisualData from "../data/promotion/mainVisual";

export default function Home(){
    
    interface funiture1{			
        img:string;			
        title1:string;			
        title2:string;			
    }
    const furnitureList: funiture1[] = [
        {
        img: sofa,
        title1: "Sofa",
        title2: "온기가 머무는 자리",
        },
        {
        img: table,
        title1: "Table",
        title2: "따듯한 식탁 위 이야기",
        },
        {
        img: light,
        title1: "Light",
        title2: "은은한 빛, 따스한 밤",
        },
    ];
  
    return(
        <>
        <Main/>
        <PromotionSection data={MainVisualData}></PromotionSection>
        <Taste></Taste>
        <Postscript></Postscript>
        <Interior></Interior>
        <Lineup></Lineup>        
        </>
    )
}