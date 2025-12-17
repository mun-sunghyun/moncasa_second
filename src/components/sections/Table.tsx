import '../../css/Sofa.scss'
import santa from '/img/santa.png';
import table from '/img/table.png';

const Table:React.FC = () =>{
    return(
        <section className="background-image2">
          <img src={santa} className="img_santa top-0"></img>
          <img src={table} className="img_sofa bottom-0"></img>
          <div className="text-wrapper">
              <p className="title1">Table</p>
              <p className="title2">따듯한 식탁 위 이야기</p>              
          </div>
        </section>            
    );
}
export default Table;        