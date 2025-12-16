import Main from "../components/sections/Main";
import Sofa from "../components/sections/Sofa";
import Sofa2 from "../components/sections/Sofa2";
import Sofa3 from "../components/sections/Sofa3";
import Sofa4 from "../components/sections/Sofa4";
import Table from "../components/sections/Table";
import Table2 from "../components/sections/Table2";
import Table3 from "../components/sections/Table3";
import Table4 from "../components/sections/Table4";
import Light from "../components/sections/Light";
import Light2 from "../components/sections/Light2";
import Light3 from "../components/sections/Light3";
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
        {/*<Sofa datainfo={furnitureList}></Sofa>*/}
        {/*<Sofa2></Sofa2>*/}
        {/*<Sofa3></Sofa3>*/}
        <Sofa4 cls="hidden"></Sofa4>        
        {/*<Table></Table>*/}       
        {/*<Table2></Table2>*/}      
        {/*<Table3></Table3>*/}
        <Table4  cls="hidden"></Table4>
        {/*<Light></Light>*/}
        {/*<Light2></Light2>*/}
        {/*<Light3></Light3>*/}
        <Taste  cls="hidden"></Taste>
        <Postscript  cls="hidden"></Postscript>
        <Interior  cls="hidden"></Interior>
        <Lineup  cls="hidden"></Lineup>        
        </>
    )
}