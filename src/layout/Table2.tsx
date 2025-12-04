import '../css/Sofa2.css'
import wood1 from '../img/wood1.png';
import wood2 from '../img/wood2.png';
import wood3 from '../img/wood3.png';
import hat from '../img/hat.png';

const Table2:React.FC = () =>{
    return(
        <section className="background-image3">
          <div className="text-wrapper">
            <p className="title1">따뜻한 감성을 담은</p>
            <p className="title2">우드시리즈</p>
          </div>
          <div className="text-wrapper2">
            <p className="title3">연말 홈파티부터 조용한 티타임까지<br/>
                                  모든 순간을 따뜻한 추억으로 만들어보세요.                  
            </p>
          </div>
          <div className="fabric-wrapper">
            <div className="fabric-card">
              <img src={wood1}></img>
              <p className="card-title">1. 나의 감성을 책임지는</p>
              <p className="card-desc">
                자연이 주는 따듯한 감성 천연 원목의 고유한 결과<br/>
                질감으로 집안에 자연의 온기를 더하고 세월이<br/>
                지날수록 깊어지는 멋을 선사합니다.
              </p>
            </div>
            <div className="fabric-card">
              <img src={wood2}></img>
              <p className="card-title">2. 나의 일상을 책임지는</p>
              <p className="card-desc">
                가족의 일상을 담는 중심 공간 넓은 상판에서<br/>
                식사부터 티타임까지 다용도로 활용 가능하며<br/>
                튼튼한 구조로 오래도록 사용합니다.
              </p>              
            </div>
            <div className="fabric-card santa-hat-card">
              <img src={hat} className="santa-hat"></img>
              <img src={wood3}></img>
              <p className="card-title">3. 나의 품격을 책임지는</p>
              <p className="card-desc">
                어떤 공간에도 어울리는 디자인 모던부터 내추럴<br/>
                인테리어까지 다양한 스타일과 조화를 이루며<br/>
                공간에 품격을 더해줍니다.
              </p>              
            </div>
          </div>
        </section>            
    );
}
export default Table2;        