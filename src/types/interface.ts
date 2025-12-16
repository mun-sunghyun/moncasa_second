export interface SofaSectionProps {
  cls?: string;
}

export interface SeriesItemData {
  img: string;
  title: string;
  desc: string;
  hat?: string;
}

export interface SeriesProps {
  title1: string;
  title2: string;
  desc: string;
  items: SeriesItemData[];
}