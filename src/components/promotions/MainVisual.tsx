
import "../../css/Sofa.scss";
import type { MainVisualData } from "../../data/promotion/mainVisual";

interface MainVisualProps {
  data: MainVisualData;
}

export default function MainVisual({ data }: MainVisualProps) {
  return (
    <section
      id={data.id}
      className="bg-cover bg-center bg-no-repeat flex justify-center items-start relative h-[1080px] w-screen"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      <div className="prodMain w-full h-full">
        <div className="text-wrapper flex flex-col justify-start items-center pt-[135px] h-full">
          <p className="font-cafe24 text-[20px] md:text-[35px] xl:text-[70px] text-[#FFFFFF]">{data.title1}</p>
          <p className="font-pretendard text-[12px] md:text-[20px] xl:text-[30px] text-[#FFFFFF]">{data.title2}</p>
        </div>
      </div>
    </section>
  );
}
