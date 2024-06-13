import React from "react";
import "../../styles/shared/Card.scss";

export type CardItem = {
  header: string;
  content: string;
  imageUrl: string;
};

export default function Card({ header, content, imageUrl }: CardItem) {
  return (
    <div className="card-container">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
      <img className="card-media" src={imageUrl} />
    </div>
  );
}
