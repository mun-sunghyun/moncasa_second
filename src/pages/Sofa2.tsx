import '../css/Sofa2.css'
import fabric1 from '../img/fabric1.png';
import fabric2 from '../img/fabric2.png';
import fabric3 from '../img/fabric3.png';
import hat from '../img/hat.png';

const Sofa2:React.FC = () =>{
    return(
        <section className="background-image3 flex justify-center items-center">
          <div className='monContainer flex-col gap-[25px] md:gap-[70px] xl:gap-[120px] pt-[50px] md:pt-[120px] pb-[100px] md:pb-[200px] flex justify-center items-center'>

          
          <div className='flex justify-between items-end w-full'>
            <div className="text-wrapper gap-2 md:gap-6">
              <p className="title1">포근하고 아늑한</p>
              <p className="title2 leading-none">패브릭 시리즈</p>
            </div>
            <p className="title3 text-wrapper2 text-right">하루의 피로를 녹이는 아늑한<br/>
                                  소파에서 겨울의 여유를 만끽하세요.                  
            </p>
          </div>
          
          
          <div className="fabric-wrapper flex flex-col justify-center md:flex-row gap-6 md:gap-3 lg:gap-6">
            <div className="fabric-card flex flex-col justify-between items-center w-full md:w-1/3 h-[284px] sm:h-[370px] md:h-full rounded-[15px] pt-2.5 pr-2.5 pb-6 pl-2.5 lg:pt-5 lg:pr-5 lg:pb-12 lg:pl-5 gap-8 md:gap-12 lg:gap-16">
              <img src={fabric1} className='w-full h-[60%] sm:h-[70%] max-h-[410px] object-cover rounded-[15px]'></img>
              <div className='flex flex-col w-[95%] gap-4 md:gap-8'>
                <p className="card-title leading-none text-left">1. 나의 온기를 책임지는</p>
                <p className="card-desc break-keep break-words text-left">
                  온기를 전하는 부드러운 감촉 겨울철 차가운 가죽 대신 포근하고 따뜻한 패브릭 소재로 앉는 순간 편안함을 느낄 수 있습니다.
                </p>
              </div>              
            </div>
            
            <div className="fabric-card w-full md:w-1/3">
              <img src={fabric2}></img>
              <p className="card-title">2. 나의 컨디션을 책임지는</p>
              <p className="card-desc">
                깊이 앉을수록 편안한 쿠션감 인체공학적 설계로<br/>
                장시간 앉아도 피로감 없이 편안하여 온 가족이<br/>
                함께 여유를 즐길 수 있습니다.
              </p>              
            </div>
            <div className="fabric-card santa-hat-card relative w-full md:w-1/3">
              <img src={hat} className="santa-hat absolute hidden md:block w-[45%] h-[30%] top-[-13%] left-[85%]"></img>
              <img src={fabric3}></img>
              <p className="card-title">3. 나의 따스함을 책임지는</p>
              <p className="card-desc">
                취향대로 선택하는 다양한 컬러 아이보리, 그레이,<br/>
                베이지 등 집안 분위기에 맞춰 선택 가능하며<br/>
                계절감 있는 따뜻한 색감을 제공합니다.
              </p>              
            </div>
          </div>
          </div>
        </section>        
    );
}
export default Sofa2;        