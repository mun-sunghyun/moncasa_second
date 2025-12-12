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