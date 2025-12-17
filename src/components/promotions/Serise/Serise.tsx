import TitleText from "./TitleText";
import SeriesItem from "./SeriesItem";
import "../../../css/Sofa2.scss";

import type { SeriesProps ,  SofaSectionProps} from "../../../types/interface";

type Props = SeriesProps & SofaSectionProps;

const Series: React.FC<Props> = ({
  title1,
  title2,
  desc,
  items
}) => {
  return (
    <section className="w-screen background-image3">
      <div className='flex flex-col gap-[25px] md:gap-[70px] xl:gap-[120px] pt-[50px] md:pt-[120px] pb-[100px] md:pb-[200px] justify-center items-center'>
        <TitleText title1={title1} title2={title2} desc={desc} />

        <div className="flex flex-col lg:flex-row xl:gap-6 gap-3">
          {items.map((item, idx) => (
            <SeriesItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Series;