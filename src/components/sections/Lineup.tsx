import '../../css/Lineup.scss'

import type { SofaSectionProps } from "../../types/interface";

const Lineup:React.FC<SofaSectionProps> = ({cls = ""}) =>{
    return(
        <section className={cls + " lineup p-0 w-full flex"}>
            <div className="lineup_img1 flex-1">
                <a className="title1 flex">
                    <div className="text-center flex-shrink-0">
                    몬까사의 다양한<br/>
                    <strong className="title2">제품 라인업</strong>
                    </div>
                    <svg id="arrow" className="arrow_icon flex-shrink-0" viewBox="0 0 91 52"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.1786 0.5L60.9227 4.78596L78.9786 22.9695H0.5V29.0311H78.9781L60.9227 47.2141L65.1786 51.5L90.5 26L65.1786 0.5Z" fill="currentColor"/>
                    </svg>                    
                </a>
            </div>
            <div className=" flex-1 flex flex-col min-w-0">
                <div className="lineup_img2 flex-1">
                    <a className="title3 flex">
                        <div className="text-center flex-shrink-0">
                            정성을 다하는<br/>
                            <strong className="title4">소파케어 받으러가기</strong>
                        </div>
                        <svg className="arrow_icon fill-[#fff] flex-shrink-0"><use href="#arrow"></use>
                        </svg>  
                    </a>
                </div>
                <div className="lineup_img3 flex-1">
                    <a className="title5 flex">
                        <div className="text-center flex-shrink-0">
                            내 가구에 어울리는<br/>
                            <strong className="title6">소파케어 받으러가기</strong>
                        </div>
                        <svg className="arrow_icon fill-[#713131] flex-shrink-0"><use href="#arrow"></use>
                        </svg> 
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Lineup;