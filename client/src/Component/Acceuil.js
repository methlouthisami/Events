import EV1 from "../images/event1.jpg";
import EV2 from "../images/evnet2.jpg";
import EV3 from "../images/event3.jpg";
import React from "react";
import ZEvent from "../images/z-event3.jpg";
import Fan from "../images/fan.jpeg";
import AC1 from "../images/cinema3.jpg";
import AC2 from "../images/eventArt5.jpeg";
import AC3 from "../images/z-event3.jpg";
import AC5 from '../images/cinema2.jpg'
import AC4 from "../images/cinema7.png";
import CI from '../images/cinema1.jpg'
import CI2 from "../images/cinema4.jpg"
import GllAcceuil from "./GllAcceuil";
import EVART from "../images/eventArt2.jpeg"
import "./Acceuil.css";
import GalleryAcceuil from "./GalleryAcceuil";
import Footer from "./Footer";
import Navv from "./Navv";
import MAH1 from "../images/MAHRAGEN1.gif";
import MAH2 from "../images/MAHRAJEN2.jpg";
import MAH3 from "../images/MAHRAGEN3.jpeg";

export default function Acceuil() {
  return (
    <div>
      <Navv />
      <GllAcceuil />
      
      <div className="AcceuilCard">
        <div className="tile">
          <img src={EV3} alt="EVENT3" />
          <div className="text">
            <h1>Tunisia Event</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="tile">
          <img src={Fan} alt="EVENT3" />
          <div className="text">
            <h1>EL FEN YONJEZ</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={EV1} alt="EVENT3" />
          <div className="text">
            <h1>CONTRE L'EMERIALIA</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={EV2} alt="EVENT3" />
          <div className="text">
            <h1>TUNISIA ARTISAN</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={AC1} alt="EVENT3" />
          <div className="text">
            <h1>9BAL MAYFOUT EL FOUT</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="tile">
          <img src={AC2} alt="EVENT3" />
          <div className="text">
            <h1>LELA KHDIJA</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={AC3} alt="EVENT3" />
          <div className="text">
            <h1>JAZZ CARTAGE</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={AC5} alt="EVENT3" />
          <div className="text">
            <h1>Un Diven divan a tunis</h1>
            <h2 className="animate-text">tunisien film </h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={CI} alt="EVENT3" />
          <div className="text">
            <h1>samiiii</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="tile">
          <img src={Fan} alt="EVENT3" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="tile">
            <img src={EV1} alt="EVENT3" />
            <div className="text">
              <h1>Lorem ipsum.</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{" "}
              </p>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="tile">
          <img src={EVART} alt="EVENT3" />
          <div className="text">
            <h1>TUNIS EL HADETHA</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="tile">
          <img src={CI2} alt="EVENT3" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
              prosciutto kevin turducken.{" "}
            </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <GalleryAcceuil />
      <div className="container festival">
        <div className="row">
          <div className="col-md-4 col-sm-4 festival-card">
            <img src={MAH1} alt="" />
            <h5>
              Le Club culturel Tahar Haddad organise du 16 au 23 juin le
              Festival national du oud (Luth) de la Médina de Tunis.
            </h5>
          </div>
          <div className="col-md-4 col-sm-4 festival-card">
            <img src={MAH2} alt="" />
            <h5>Les Nuits Du Théâtre De L’opéra De Tunis À Hammamet</h5>
          </div>
          <div className="col-md-4 col-sm-4  festival-card">
            <img src={MAH3} alt="" />
            <h5>La Médina de Tunis accueille le Festival national du Oud</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
