import '../../css/Interior.scss'
import interior1 from '/img/interior1.jpg';
import interior2 from '/img/interior2.jpg';
import interior3 from '/img/interior3.jpg';
import hat from '/img/hat.png';
import type { SofaSectionProps } from "../../types/interface";


const Interior:React.FC<SofaSectionProps> = ({cls = ""}) => {
    return(
        <section className={cls}>
            <div className="section_p px-4 lg:px-0 my-20">
                <ul className=" grid grid-cols-2 gap-4
                    md:flex md:flex-row md:justify-center">
                    <li>
                        <img src={interior1}></img>
                    </li>
                    <li>
                        <img src={interior2}></img>
                    </li>
                    <li>
                        <img src={interior3}></img>
                    </li>
                    <li className="relative text_box" >
                        <div className='hidden lg:flex flex-col gap-4'>
                            <p className="title1">다양한 고객님들의</p>
                            <p className="title2">집들이<br/>
                        구경해보세요</p>
                        </div>
                        <div className='lg:hidden'>
                            <p className="title1">다양한 고객님들의</p>
                            <p className="title2">집들이
                        구경해보세요</p>
                        </div>
                        
                        <button className="option-btn">구경하러 가기</button>
                        <img src={hat} className="santa-hat absolute hidden lg:block"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Interior;