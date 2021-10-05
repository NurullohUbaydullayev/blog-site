import "./Portfolio.scss";
import React from "react";

// Components
import Footer from "../../Components/Footer/Footer";
import MyWorks from "../../Components/MyWorks/MyWorksPortfolio";
import PortHeader from "../../Components/PortHeader/PortHeader";

function Portfolio() {
  React.useEffect(() => {
    window.location.href = "#port-header";
  }, []);
  return (
    <div className="portfolio">
      <Footer />
      <MyWorks />
      <PortHeader />
    </div>
  );
}

export default Portfolio;
