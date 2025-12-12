
import "../../css/Sofa.css";

type Overlay = {
  src: string;
  alt?: string;
  className?: string; // img_santa top-0, img_sofa bottom-0 이런거
};

export interface MainVisualData {
  title1: string;
  title2: string;

  // ✅ 배경을 이미지로 바꿀 수 있게 (public/img 기준 /img/...)
  bgImage?: string;

  // ✅ 산타, 제품이미지, 장식 등 여러개 얹기 가능
  overlays?: Overlay[];
}

interface Props {
  data: MainVisualData;
  className?: string;
}

export default function MainVisual({ data, className = "" }: Props) {
  const { title1, title2, bgImage, overlays = [] } = data;

  return (
    <section
      className={`flex justify-center items-start relative h-[1080px] ${className}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {overlays.map((o, i) => (
        <img
          key={`${o.src}-${i}`}
          src={o.src}
          alt={o.alt ?? ""}
          className={o.className ?? ""}
        />
      ))}

      <div className="prodMain w-full h-full">
        <div className="text-wrapper flex flex-col justify-start items-center pt-[135px] h-full">
          <p className="title1">{title1}</p>
          <p className="title2">{title2}</p>
        </div>
      </div>
    </section>
  );
}
