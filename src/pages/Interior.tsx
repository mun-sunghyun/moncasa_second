import '../css/Interior.css'
import interior1 from '../img/interior1.jpg';
import interior2 from '../img/interior2.jpg';
import interior3 from '../img/interior3.jpg';
import hat from '../img/hat.png';

const Interior:React.FC = () => {
    return(
        <section>
            <div className="section_p">
                <ul className="flex gap-2 justify-center">
                    <li>
                        <img src={interior1}></img>
                    </li>
                    <li>
                        <img src={interior2}></img>
                    </li>
                    <li>
                        <img src={interior3}></img>
                    </li>
                    <li className="relative" >
                        <p className="title1">다양한 고객님들의</p>
                        <p className="title2">집들이<br/>
                        구경해보세요</p>
                        <button className="option-btn">구경하러 가기</button>
                        <img src={hat} className="santa-hat absolute"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Interior;