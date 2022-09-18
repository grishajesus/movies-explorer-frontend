import "./main.css";
import Promo from "../Promo/promo.jsx";
import AboutProject from "../AboutProject/aboutproject.jsx";
import Technologies from "../Technologies/technologies.jsx";
import AboutMe from "../AboutMe/aboutme.jsx";
import Portfolio from "../Portfolio/portfolio.jsx";

export default function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
