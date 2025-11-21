import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {

  return (
    <>
      <Header/>   
      <main className="pt-[70px]">
        <section>
          <div className="background-image1">
            <img src="/img/Holiday_Season.png" className="img_HolidaySeason"></img>
            <img src="/img/star.png" className="img_star"></img>
            <div className="text-wrapper">
              <p className="title1">따듯한 겨울, 포근한 우리 집</p>
              <p className="title2">포근한 소파부터 감각적인 테이블, 따뜻한 조명까지,<br/>
                겨울을 완성하는 감성 가구 컬렉션
              </p>
            </div>
          </div>
        </section>
        <section className="background-image2">
          <img src="/img/santa.png" className="img_santa top-0"></img>
          <img src="/img/sofa.png" className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Sofa</p>
              <p className="title2">온기가 머무는 자리</p>              
          </div>
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
