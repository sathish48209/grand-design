import "../../styles/landing-page/LandingPage.scss";

export default function DescriptionSection() {
  return (
    <div className="description-section-container">
      <div className="item-section">
        <img
          className="item-img"
          src="images/landing-page/travlfi_router.png"
        />
        <div className="content-section">
          <div className="header-section">
            <div className="title">The JourneyXTR</div>
            <div className="sub-title">4G/LTE Router & Wi-Fi Extender</div>
          </div>
          <ul className="body-section">
            <li>
              Security - Stay connected while avoiding public Wi-Fi connections
              in your own personal, private network connecting upto 32 devices
            </li>
            <li>
              TowerSync - The wireless industry's only platform tgat
              automatically scans and reconnects to strongest available tower
              among multiple providers
            </li>
            <li>
              Coverage - With coverate virtually anywhere in the U.S., you don't
              have to sacrifice destination for network reliability.
            </li>
            <li>
              E-Sim Technology - Enjoy reliable Internet connection without the
              need fpr a physical SIM card.
            </li>
            <li>
              Flexible Data Plans - Choose from a variety of Pay As You Go data
              plans including an Unlimited option.
            </li>
            <li>
              Commitment Free - No Contract, prepaid data plans, Prepay for a
              month at a time based on your usage and travel schedule.
            </li>
          </ul>
        </div>
      </div>
      <div className="note-section">
        Comes Standard in all Reflection Travel Trailers and Fifth Wheels
        (except 100-Series), Influence, Solitude and Momentum Fifth Wheels
        (G-Class, M-Class and Momentum). It also comes Optional on Momentum
        Travel Trailers.
      </div>
    </div>
  );
}
