import '../../css/Sofa.scss'

interface funiture{			
    img:string;			
    title1:string;			
    title2:string;			
}			
interface funitureProps{			
    datainfo:funiture[];			
}

const Sofa:React.FC<funitureProps> = ({datainfo}) =>{
    return(
        <>
        {datainfo.map((item, idx) => (
        <section key={idx}
                className="bg-cover bg-center bg-no-repeat flex justify-center items-start relative h-[1080px]"
                style={{ backgroundImage: `url(${item.img})` }}
        >

        <div className='prodMain w-full h-full'> 

            <div className="text-wrapper flex flex-col justify-start items-center pt-[135px] h-full">
                <p className="title1">{item.title1}</p>
                <p className="title2">{item.title2}</p>
            </div> 
        </div>
          
        </section>
        ))}
        </>
    );
}
export default Sofa;