import './App.css'
import Header from './layout/Header';
import Footer  from './layout/Footer';

function App() {

  return (
    <>
      <Header/>
      <main>
        <section id="minimal" className="section-padding h-[100vh] bg-gray-100 pt-[200px]">
          <div className="container_1450">미니멀 섹션</div>
        </section>
        <section id="upcycling" className="section-padding h-[100vh] bg-gray-200">
          <div className="container_1450">친환경 섹션</div>
        </section>
        <section id="premium" className="section-padding h-[100vh] bg-gray-300">
          <div className="container_1450">프리미엄 섹션</div>
        </section>
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
