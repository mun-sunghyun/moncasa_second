import sofa from "/img/sofa.png";
import table from "/img/table.png";
import light from "/img/light.png";

export interface MainVisualData {
  id: "sofa" | "table" | "light";
  img: string;
  title1: string;
  title2: string;
}

export const mainVisualData: MainVisualData[] = [
  {
    id: "sofa",
    img: sofa,
    title1: "Sofa",
    title2: "온기가 머무는 자리",
  },
  {
    id: "table",
    img: table,
    title1: "Table",
    title2: "따듯한 식탁 위 이야기",
  },
  {
    id: "light",
    img: light,
    title1: "Light",
    title2: "은은한 빛, 따스한 밤",
  },
];

export default mainVisualData;