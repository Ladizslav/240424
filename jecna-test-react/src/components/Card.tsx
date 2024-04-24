import React, { PropsWithChildren } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, text }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <hr />
      <img src={imageSrc} alt={title} />
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default Card;
