import "../../../css/Sofa2.scss";
interface TitleTextProps {
  title1: string;
  title2: string;
  desc: string;
}

const TitleText: React.FC<TitleTextProps> = ({ title1, title2, desc }) => {
  return (
    <>
      <div className='flex justify-between items-end max-w-custom w-full text-basic'>
        <div className="gap-2 md:gap-6 pl-[50px] xl:pl-[0px]">
          <p className="font-pretendard text-[10px] md:text-[20px] xl:text-[25px]">{title1}</p>
          <p className="font-pretendardBold text-[18px] md:text-[40px] xl:text-[60px] leading-none">{title2}</p>
        </div>
          <p
            className="font-pretendard text-right text-[12px] sm:text-[calc(16px+0.1vw)] xl:text-[25px] pr-[50px] xl:pr-[0px]"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
      </div>    
    </>
  );
};

export default TitleText;