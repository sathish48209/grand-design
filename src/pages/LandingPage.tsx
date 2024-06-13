import RVInternetSection from "../components/landing-page/RVInternetSection";
import ImageSection from "../components/landing-page/ImageSection";
import DescriptionSection from "../components/landing-page/DescriptionSection";
import XTRRouterSection from "../components/landing-page/XTRRouterSection";
import LearnMoreSection from "../components/landing-page/LearnMoreSection";
import "../styles/landing-page/LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="container">
      <RVInternetSection />
      <ImageSection />
      <DescriptionSection />
      <XTRRouterSection />
      <LearnMoreSection />
    </div>
  );
}
