import React from "react";
import DesktopBackground from "../../assets/Home/Clients/Desktop Background.png";
import MumbaiCafe from "../../assets/Home/Clients/Mumbai Cafe.png";
import BagaraBiryani from "../../assets/Home/Clients/Bagara Biryani.png";
import TFG from "../../assets/Home/Clients/TFG.png";
import BakeryDelightt from "../../assets/Home/Clients/Bakery Delightt.png";
import KhmerKitchen from "../../assets/Home/Clients/Khmer Kitchen.png";

function Clients() {
  return (
    <section className="template clients">
      <img
        src={DesktopBackground}
        alt="Desktop Background"
        className="template-background"
      />
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Our Clients</p>
        </div>
        <h2>Trusted By</h2>
      </header>
      <div className="clients-container">
        <img src={MumbaiCafe} alt="Mumbai Cafe" />
        <img src={BagaraBiryani} alt="Bagara Biryani" />
        <img src={TFG} alt="TFG" />
        <img src={BakeryDelightt} alt="Bakery Delightt" />
        <img src={KhmerKitchen} alt="Khmer Kitchen" />
      </div>
    </section>
  );
}

export default Clients;
