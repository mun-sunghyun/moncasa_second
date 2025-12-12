import '../../css/Sofa2.css'
import mood1 from '/img/mood1.png';
import mood2 from '/img/mood2.png';
import mood3 from '/img/mood3.png';
import hat from '/img/hat.png';

const Light2:React.FC = () =>{
    return(
        <section className="background-image3">
          <div className="text-wrapper">
            <p className="title1">은은하게</p>
            <p className="title2">무드등 시리즈</p>
          </div>
          <div className="text-wrapper2">
            <p className="title3">겨울밤의 낭만을 더해주는<br/>
                                  감성 조명으로 집안 분위기를 연출하세요.                  
            </p>
          </div>
          <div className="fabric-wrapper">
            <div className="fabric-card">
              <img src={mood1}></img>
              <p className="card-title">1. 나의 분위기를 책임지는</p>
              <p className="card-desc">
                분위기를 바꾸는 은은한 빛 밝기 조절 기능으로<br/>
                상황에 맞게 조명을 연출할 수 있으며 독서,휴식 등<br/>
                다양한 용도로 활용합니다.
              </p>
            </div>
            <div className="fabric-card">
              <img src={mood2}></img>
              <p className="card-title">2. 나의 인테리어를 책임지는</p>
              <p className="card-desc">
                공간을 채우는 감성 디자인 심플하면서도 세련된<br/>
                형태로 어디에 두어도 인테리어 소품이 되며 겨울<br/>
                밤 분위기를 한층 고급스럽게 만듭니다.
              </p>              
            </div>
            <div className="fabric-card santa-hat-card">
              <img src={hat} className="santa-hat"></img>
              <img src={mood3}></img>
              <p className="card-title">3. 나의 편리함을 책임지는</p>
              <p className="card-desc">
                편리함을 더하는 스마트 기능 터치, 리모컨조작으로<br/>
                손쉽게 제어하고 타이머 설정으로 취침 시간까지<br/>
                활용하며 USB 포트로 충전까지 가능합니다.
              </p>              
            </div>
          </div>
        </section>            
    );
}
export default Light2;        