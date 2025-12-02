import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Sofa from './layout/Sofa';
import Sofa2 from './layout/Sofa2';
import Sofa3 from './layout/Sofa3';
import Sofa4 from './layout/Sofa4';
import Table from './layout/Table';
import Table2 from './layout/Table2';
import Table3 from './layout/Table3';
import Table4 from './layout/Table4';
import Light from './layout/Light';
import Light2 from './layout/Light2';
import Light3 from './layout/Light3';
import Taste from './layout/Taste';
import Postscript from './layout/Postscript';
import Interior from './layout/Interior';
import Lineup from './layout/Lineup';

function App() {

  return (
    <>
      <Header/>   
      <main className="pt-[70px]">
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
      </main>
      <Footer/>
    </>
  );
}

export default App
