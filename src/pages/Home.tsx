import Main from "./Main";
import Sofa from "./Sofa";
import Sofa2 from "./Sofa2";
import Sofa3 from "./Sofa3";
import Sofa4 from "./Sofa4";
import Table from "./Table";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Light from "./Light";
import Light2 from "./Light2";
import Light3 from "./Light3";
import Taste from "./Taste";
import Postscript from "./Postscript";
import Interior from "./Interior";
import Lineup from "./Lineup";

export default function Home(){
    return(
        <>
        <Main/>
        <Sofa></Sofa>
        <Sofa2></Sofa2>
        <Sofa3></Sofa3>
        <Sofa4></Sofa4>        
        <Table></Table>       
        <Table2></Table2>      
        <Table3></Table3>
        <Table4></Table4>
        <Light></Light>
        <Light2></Light2>
        <Light3></Light3>
        <Taste></Taste>
        <Postscript></Postscript>
        <Interior></Interior>
        <Lineup></Lineup>        
        </>
    )
}