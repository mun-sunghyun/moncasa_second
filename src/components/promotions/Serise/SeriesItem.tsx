import "../../../css/Sofa2.scss";

interface SeriesItemProps {
  img: string;
  title: string;
  desc: string;
  hat?: string;
}

const SeriesItem: React.FC<SeriesItemProps> = ({ img, title, desc, hat }) => {
  return (
    //<div className="fabric-wrapper flex flex-col justify-center md:flex-row gap-6 md:gap-3 lg:gap-6">
      <div className="bg-[#F6F1EB] flex flex-col lg:flex-col justify-between items-center rounded-[15px] pt-2.5 pr-2.5 pb-6 pl-2.5 lg:pt-5 lg:pr-5 lg:pb-12 lg:pl-5 gap-2 lg:gap-5 relative lg:w-[33%]">
        {hat && (
          <img
            src={hat}
            className="santa-hat absolute hidden lg:block w-[45%] h-[30%] top-[-13%] left-[85%]"
          />
        )}

        <img src={img} className='w-full object-cover rounded-[15px]'/>
        <div>
          <p className="font-pretendardBold text-[#6D1511] text-left w-full text-[18px] lg:text-[25px]">{title}</p>
          <p
            className="font-pretendard text-[#7B706A] text-left w-full break-words text-[12px] lg:text-[20px]"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
 
        </div>

        
      </div>
    //</div>
  );
};

export default SeriesItem;