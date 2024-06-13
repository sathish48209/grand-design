import { useState } from "react";

import "../../styles/landing-page/RVInternetSection.scss";
import Card, { CardItem } from "../shared/Card";

export default function RVInternetSection() {
  const [cardItems, setCardItems] = useState<CardItem[]>([
    {
      header: "Your connection on your terms",
      content:
        "No hidden costs, no contracts, no commitments_EVER, Only pay for the months you use. Start and stop anytime with no reactivation fee.",
      imageUrl: "images/landing-page/rv_wifi.jpeg",
    },
    {
      header: "One plan, One Device, Multiple networks",
      content:
        "Stop struggling with dead zones or juggling several hotspots on the road. TravlFi brings you multi-network coverage so you are always connected to the strongest signal with one plan on one device",
      imageUrl: "images/landing-page/rv_connection.jpeg",
    },
    {
      header: "Stream, Work & Play on the go",
      content:
        "Stream movies and shows, browse the internet and work in confidence with connection that travels with you.",
      imageUrl: "images/landing-page/rv_stream.jpeg",
    },
  ]);

  return (
    <div className="section-container">
      <img
        className="section-logo"
        src="images/landing-page/travlfi_logo.png"
      />
      <h3 className="section-header">Easy Reliable RV Internet</h3>

      <div className="section-card-container">
        {cardItems.map((cardItem, idx) => (
          <Card
            key={idx}
            header={cardItem.header}
            content={cardItem.content}
            imageUrl={cardItem.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
