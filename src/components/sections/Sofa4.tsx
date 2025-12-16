import '../../css/Sofa4.css'
import coin from '/img/coin.png';
import heartballoon from '/img/heartballoon.png';


import type { SofaSectionProps } from "../../types/interface";



const Sofa4:React.FC<SofaSectionProps> = ({cls = "" }) =>{
    return(
        <section className={`${cls} background-image5`}>
          <div className="photo-wrapper">
            <div className="event">
              <p className="word1">
                포토 리뷰 이벤트 &gt;
              </p>
              <p className="word2">
                리뷰만 작성해도<br/>
                1000포인트 바로 적립
              </p>
            </div>
            <img src={coin} className="coin"></img>
            <div className="event">
              <p className="word1">
                신규가입 혜택 &gt;
              </p>
              <p className="word2">
                30초 간단 가입으로<br/>
                10만원 즉시 할인 혜택 받기
              </p>
            </div>
            <img src={heartballoon} className="heartballoon"></img>       
          </div>
        </section>        
    );
}
export default Sofa4;        