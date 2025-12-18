import Main from "../components/sections/Main";
import Taste from "../components/sections/Taste";
import Postscript from "../components/sections/Postscript";
import Interior from "../components/sections/Interior";
import Lineup from "../components/sections/Lineup";
import PromotionSection from "../components/promotions/PromotionSection";

import MainVisualData from "../data/promotion/mainVisual";

export default function Home(){
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