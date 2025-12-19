import React from "react";

type ReviewCardProps = {
  imageSrc: string;
  starsSrc: string;
  title: string;
  desc: string;
  imageAlt?: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  imageSrc,
  starsSrc,
  title,
  desc,
  imageAlt = "review",
}) => {
  return (
    <div className="review_card">
      <img src={imageSrc} alt={imageAlt} className="max-w-full h-auto brightness-75" />
      <ul className="review_text">
        <li>
          <img src={starsSrc} alt="stars" className="stars" />
        </li>
        <li className="title1">{title}</li>
        <li className="title2">{desc}</li>
      </ul>
    </div>
  );
};

export default ReviewCard;
