import '../css/Sofa3.css'
import sofa from '../img/sofa1.png';
import sofa2 from '../img/sofa2.png';
import sofa3 from '../img/sofa3.png';
import sofa4 from '../img/sofa4.png';
import dot_color from '../img/dot_color.png';
import dot_PET from '../img/dot_PET.png';
import dot_777255 from '../img/dot_777255.png';
import dot_7B706A from '../img/dot_7B706A.png';
import dot_FFFFFF from '../img/dot_FFFFFF.png';

const Sofa3:React.FC = () =>{
    return(
        <section className="background-image4">
          <div className="sofa-wrapper">
            <div className="product-item">
              <img src={sofa}></img>
              <div className="dot-wrapper">
                <img src={dot_color}></img>
                <img src={dot_PET}></img>
                <img src={dot_FFFFFF}></img>
              </div>
              <p className="product_words">마이스터 컬렉션 아르베 모듈형<br/>
                2인 페브릭소파
              </p>
              <div className="word-wrapper">
                <p className="word1">3,210,000원</p>
                <p className="word2">2,889,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img src={sofa2}></img>
              <div className="dot-wrapper">
                <img src={dot_7B706A}></img>
                <img src={dot_FFFFFF}></img>
              </div>
              <p className="product_words">마이스터 컬렉션 아르베<br/>
               
              </p>
              <div className="word-wrapper">
                <p className="word1">3,210,000원</p>
                <p className="word2">2,889,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img src={sofa3}></img>
              <div className="dot-wrapper">
                <img src={dot_PET}></img>
                <img src={dot_777255}></img>
                <img src={dot_7B706A}></img>
                <img src={dot_FFFFFF}></img>
              </div>
              <p className="product_words">아르베 모듈형 2인 페브릭소파<br/>
                
              </p>
              <div className="word-wrapper">
                <p className="word1">3,210,000원</p>
                <p className="word2">2,889,000원</p>
              </div>                
            </div>
            <div>
              <img src={sofa4}></img>
              <div className="dot-wrapper">
                <img src={dot_color}></img>
                <img src={dot_PET}></img>
                <img src={dot_777255}></img>
                <img src={dot_7B706A}></img>
                <img src={dot_FFFFFF}></img>
              </div>
              <p className="product_words">마이스터 컬렉션 아르베 모듈형<br/>
                2인 페브릭소파
              </p>
              <div className="word-wrapper">
                <p className="word1">3,210,000원</p>
                <p className="word2">2,889,000원</p>
              </div>
            </div>
          </div>
        </section>        
    );
}
export default Sofa3;        