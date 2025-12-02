import '../css/Interior.css'

const Interior:React.FC = () => {
    return(
        <section>
            <div className="section_p">
                <ul className="flex gap-2 justify-center">
                    <li>
                        <img src="/img/interior1.jpg"></img>
                    </li>
                    <li>
                        <img src="/img/interior2.jpg"></img>
                    </li>
                    <li>
                        <img src="/img/interior3.jpg"></img>
                    </li>
                    <li className="relative" >
                        <p className="title1">다양한 고객님들의</p>
                        <p className="title2">집들이<br/>
                        구경해보세요</p>
                        <button className="option-btn">구경하러 가기</button>
                        <img src="/img/hat.png" className="santa-hat absolute"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Interior;