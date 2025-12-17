import '../../css/Sofa.scss'
import santa from '/img/santa.png';
import light from '/img/light.png';

const Light:React.FC = () =>{
    return(
        <section className="background-image2">
          <img src={santa} className="img_santa top-0"></img>
          <img src={light} className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Light</p>
              <p className="title2">은은한 빛,따스한 밤</p>              
          </div>
        </section>           
    );
}
export default Light;        