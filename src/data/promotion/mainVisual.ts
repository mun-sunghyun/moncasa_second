import type { MainVisualData } from "../../components/promotions/MainVisual";

export const sofaMain: MainVisualData = {
  title1: "Sofa",
  title2: "온기가 머무는 자리",
  bgImage: "/img/sofa.png",
  overlays: [
    { src: "/img/sofa_main.png", className: "img_sofa bottom-0", alt: "sofa" },
  ],
};

export const tableMain: MainVisualData = {
  title1: "Table",
  title2: "따듯한 식탁 위 이야기",
  bgImage: "/img/table.png",
  overlays: [
    { src: "/img/santa.png", className: "img_santa top-0", alt: "santa" },
    { src: "/img/table.png", className: "img_sofa bottom-0", alt: "table" },
  ],
};

export const lightMain: MainVisualData = {
  title1: "Light",
  title2: "은은한 빛,따스한 밤",
  bgImage: "/img/light.png",
  overlays: [
    { src: "/img/santa.png", className: "img_santa top-0", alt: "santa" },
    { src: "/img/light.png", className: "img_sofa bottom-0", alt: "light" },
  ],
};
