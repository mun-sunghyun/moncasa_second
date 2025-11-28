import '../css/Sofa.css'

const Light:React.FC = () =>{
    return(
        <section className="background-image2">
          <img src="/img/santa.png" className="img_santa top-0"></img>
          <img src="/img/light.png" className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Light</p>
              <p className="title2">은은한 빛,따스한 밤</p>              
          </div>
        </section>           
    );
}
export default Light;        