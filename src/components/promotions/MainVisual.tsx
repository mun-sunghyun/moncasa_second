
import "../../css/Sofa.css";
import mainVisualData from "../../data/promotion/mainVisual";
import type { MainVisualData } from "../../data/promotion/mainVisual";

interface Furniture {
  img: string;
  title1: string;
  title2: string;
}

interface MainVisualProps {
  data: MainVisualData;
}

export default function MainVisual({ data }: MainVisualProps) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat flex justify-center items-start relative h-[1080px]"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      <div className="prodMain w-full h-full">
        <div className="text-wrapper flex flex-col justify-start items-center pt-[135px] h-full">
          <p className="font-cafe24 xl:text-[70px] text-[#FFFFFF]">{data.title1}</p>
          <p className="font-pretendard xl:text-[30px] text-[#FFFFFF]">{data.title2}</p>
        </div>
      </div>
    </section>
  );
}
