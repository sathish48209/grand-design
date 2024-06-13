import Header from "./components/shared/Header";
import LandingPage from "./pages/LandingPage";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Header />
      <LandingPage />
    </div>
  );
}
