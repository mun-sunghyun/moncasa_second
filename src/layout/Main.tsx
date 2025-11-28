import '../css/Main.css'

const Main: React.FC = () =>{
    return(
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
    );
}

export default Main;