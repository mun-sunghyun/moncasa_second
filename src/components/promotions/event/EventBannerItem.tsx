import '../../../css/Sofa4.scss';

interface EventItem {
  title: string;
  description: string;
  image: string;
}

interface EventBannerItemProps {
  item: EventItem;
}

const EventBannerItem: React.FC<EventBannerItemProps> = ({ item }) => {
  return (
    <>
    <div className="relative">
    <div className="event flex flex-col overflow-visible w-[200px] md:w-[350px] xl:w-[708px] h-[80px] md:h-[124px]">
      <p className="font-pretendardBold text-[#713131] text-[10px] md:text-[20px] pt-[2%] ml-[4%]">{item.title}</p>
      <p className="font-pretendard text-[#ADADAD] text-[10px] md:text-[18px] mt-[1%] ml-[4%]">
        {item.description.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>  
    <img src={item.image} alt="" className="absolute top-[10%] md:top-[15%] xl:top-[-25%] left-[70%] md:left-[70%] xl:left-[65%] w-[40px] sm:w-[50px] md:w-[130px] xl:w-[200px]"/>
    </div>
    </>
  );
};

export default EventBannerItem;