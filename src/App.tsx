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
import Light from './layout/light';
import Light2 from './layout/light2';
import Light3 from './layout/light3';
import Taste from './layout/taste';

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

                                                      
        {/* ... 나머지 섹션들 ... */}
        <section id="lineup" className="section-padding h-[50vh] bg-gray-400">
          <div className="container_1450">MONCASA 섹션</div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App
