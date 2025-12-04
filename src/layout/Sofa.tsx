import '../css/Sofa.css'
import santa from '../img/santa.png';
import sofa from '../img/sofa.png';


const Sofa:React.FC = () =>{
    return(
        <section className="background-image2">
          <img src={santa} className="img_santa top-0"></img>
          <img src={sofa} className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Sofa</p>
              <p className="title2">온기가 머무는 자리</p>              
          </div>
        </section>
    );
}
export default Sofa;