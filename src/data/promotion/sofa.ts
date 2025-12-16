import fabric1 from "/img/fabric1.png";
import fabric2 from "/img/fabric2.png";
import fabric3 from "/img/fabric3.png";
import hat from "/img/hat.png";

const sofa = {
  id: "sofa",
  title1: "포근하고 아늑한",
  title2: "패브릭 시리즈",
  desc: "하루의 피로를 녹이는 아늑한<br/>소파에서 겨울의 여유를 만끽하세요.",
  items: [
    {
      img: fabric1,
      title: "1. 나의 온기를 책임지는",
      desc: "온기를 전하는 부드러운 감촉 겨울철 차가운 가죽<br/>대신 포근하고 따뜻한 패브릭 소재로 앉는 순간<br/>편안함을 느낄 수 있습니다.",
    },
    {
      img: fabric2,
      title: "2. 나의 컨디션을 책임지는",
      desc: "깊이 앉을수록 편안한 쿠션감 인체공학적 설계로<br/>장시간 앉아도 피로감 없이 편안하여 온 가족이<br/>함께 여유를 즐길 수 있습니다.",
    },
    {
      img: fabric3,
      title: "3. 나의 따스함을 책임지는",
      desc: "취향대로 선택하는 다양한 컬러 아이보리, 그레이,<br/>베이지 등 집안 분위기에 맞춰 선택 가능하며<br/>계절감 있는 따뜻한 색감을 제공합니다.",
      hat,
    },
  ],
};

export default sofa;