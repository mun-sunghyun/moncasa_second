import '../css/Sofa.css'

const Sofa:React.FC = () =>{
    return(
        <section className="background-image2">
          <img src="/img/santa.png" className="img_santa top-0"></img>
          <img src="/img/sofa.png" className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Sofa</p>
              <p className="title2">온기가 머무는 자리</p>              
          </div>
        </section>
    );
}
export default Sofa;